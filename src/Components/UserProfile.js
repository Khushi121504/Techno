// src/components/UserProfile.js
import React, { useState } from 'react';

const UserProfile = ({ setGoal }) => {
  const [habit, setHabit] = useState('');
  const [frequency, setFrequency] = useState('Daily'); // Default value to 'Daily'
  const [reminderTime, setReminderTime] = useState('08:00'); // Default reminder time
  const [timeOfDay, setTimeOfDay] = useState('Morning'); // State for time of day

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit) {
      setGoal({ habit, frequency, reminderTime, timeOfDay }); // Include timeOfDay in setGoal
      setHabit(''); // Reset habit after submission
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="user-profile">
      <h3>Set Goals</h3>

      <p className="italic-text">"A goal properly set is halfway reached"</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Habit:</label>
          <input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            placeholder="E.g., Exercise, Drink Water"
            required
          />
        </div>
        <div className="form-group">
          <label>Frequency:</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            required
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reminder Time:</label>
          <input
            type="time"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time of Day:</label>
          <select
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value)}
            required
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Set Goal
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
