import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReminderNotification = ({ habitCompleted, reminderTime }) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const sendBrowserNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Habit Reminder', {
        body: 'Don’t forget to complete your habit!',
      });
    }
  };

  const sendInAppNotification = () => {
    toast.info(`Time to complete your habit at ${reminderTime}!`, {
      autoClose: false,
      closeOnClick: true,
      draggable: false,
    });
  };

  const checkForReminder = () => {
    const now = new Date();
    const reminderDate = new Date();
    const [hours, minutes] = reminderTime.split(':');
    reminderDate.setHours(hours);
    reminderDate.setMinutes(minutes);
    reminderDate.setSeconds(0);

    // Check if the current time matches the reminder time and habit is not completed
    if (!habitCompleted && now.getHours() === reminderDate.getHours() && now.getMinutes() === reminderDate.getMinutes()) {
      sendInAppNotification();
      sendBrowserNotification();
    }
  };

  useEffect(() => {
    const reminderInterval = setInterval(() => {
      checkForReminder();
    }, 60000); // Check every minute

    return () => clearInterval(reminderInterval);
  }, [habitCompleted, reminderTime]); // Add habitCompleted here to ensure updates trigger checks

  return null; // No UI required for notification component
};

export default ReminderNotification;
