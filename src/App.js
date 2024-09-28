import React, { useState } from 'react';
import HabitTracker from './Components/HabitTracker';
import UserProfile from './Components/UserProfile';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [goal, setGoal] = useState(null); // State management for the goal

  // Function to determine the time of day
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return 'Morning';
    if (currentHour < 18) return 'Afternoon';
    return 'Evening';
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`, backgroundSize: 'cover', height: '100vh' }}>
      <h1>HEALTHY HABITS</h1>
      <header></header>

      {/* Conditionally render UserProfile or HabitTracker based on goal state */}
      {!goal ? (
        <UserProfile setGoal={setGoal} />
      ) : (
        <HabitTracker 
          habit={goal.habit} 
          frequency={goal.frequency} 
          streak={0} // Example value, adjust as needed
          progress={10} // Example value, adjust as needed
          completeHabit={() => console.log('Habit completed')} // Replace with actual function
          goalCompleted={false} // Example value, adjust as needed
          timeOfDay={getTimeOfDay()} // Pass the time of day
          reminderTime={goal.reminderTime} // Pass reminder time
        />
      )}

      {/* Toast notifications setup */}
      <ToastContainer />
    </div>
  );
};

export default App;
