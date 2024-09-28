// src/components/HabitTracker.js
import React from 'react';  
import HabitProgress from './HabitProgress';
import ReminderNotification from './ReminderNotification';

function HabitTracker({ habit, frequency, streak, progress, completeHabit, goalCompleted, timeOfDay, reminderTime }) { // Accept timeOfDay as a prop
  return (
    <div className="habit-tracker">
      <h3>Habit Tracker</h3>

      {/* Add the imported logo here */}
      <img 
        src={`${process.env.PUBLIC_URL}/image/logo.png`} 
        alt="My Description" 
        style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '15px' }} 
      />

      <p>Habit: {habit}</p>
      <p>Frequency: {frequency}</p>
      <p>Streak: {streak} days</p>
      <p>Reminder Time: {timeOfDay} at {reminderTime}</p> {/* Display selected time of day */}

      {/* Progress Monitoring with Pie Chart */}
      <HabitProgress progress={progress} />

      <button onClick={completeHabit} disabled={goalCompleted}>
        Mark as Completed
      </button>

      {/* Reminders & Notifications */}
      <ReminderNotification />
    </div>
  );
}

export default HabitTracker;
