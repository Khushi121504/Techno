import React, { useState } from 'react';
import HabitTracker from './Components/HabitTracker';
import UserProfile from './Components/UserProfile';
import './App.css';

const App = () => {
  const [goal, setGoal] = useState(null);

  return (
    <div className="app-container">
      <h1>HEALTHY HABITS</h1>
      
      {/* Conditionally render UserProfile or HabitTracker */}
      {!goal ? (
        <UserProfile setGoal={setGoal} />
      ) : (
        <div>
          <UserProfile setGoal={setGoal} currentGoal={goal} /> {/* Pass currentGoal for editing */}
          <HabitTracker 
            habit={goal.habit} 
            frequency={goal.frequency} 
            reminderTime={goal.reminderTime} 
            timeOfDay={goal.timeOfDay}
            streak={0} // Example value for streaks
            progress={0} // Example value for progress
            completeHabit={() => console.log('Habit completed')}
            goalCompleted={false}
          />
        </div>
      )}
    </div>
  );
};

export default App;