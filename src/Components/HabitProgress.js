import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const HabitProgress = () => {
  // Initial state for tasks with points
  const [tasks, setTasks] = useState({
    task1: { completed: false, points: 10 },  // Each task now has points
    task2: { completed: false, points: 15 },
    task3: { completed: false, points: 20 },
  });

  // State to hold total progress in points
  const [progress, setProgress] = useState(0);
  const [showChart, setShowChart] = useState(false); // Toggle chart visibility

  // Calculate progress based on total points
  useEffect(() => {
    const totalPoints = Object.values(tasks).reduce((acc, task) => acc + task.points, 0);
    const completedPoints = Object.values(tasks).reduce(
      (acc, task) => acc + (task.completed ? task.points : 0),
      0
    );
    const progressPercentage = (completedPoints / totalPoints) * 100;
    setProgress(progressPercentage); // Update the progress state
  }, [tasks]); // Recalculate progress every time a task is completed/uncompleted

  // Data for the Pie chart
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Progress',
        data: [progress, 100 - progress], // Progress vs remaining points
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Toggle chart visibility
  const handleToggle = () => {
    setShowChart(!showChart);
  };

  // Handle checkbox changes
  const handleTaskChange = (taskName) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskName]: { ...prevTasks[taskName], completed: !prevTasks[taskName].completed }, // Toggle task completion
    }));
  };

  // Handle point changes
  const handlePointsChange = (taskName, event) => {
    const points = parseInt(event.target.value, 10) || 0; // Get the new points value
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskName]: { ...prevTasks[taskName], points }, // Update points for the task
    }));
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3>Habit Progress</h3>

      {/* Task Checklist with Points Input */}
      <div style={{ textAlign: 'left', margin: '20px auto', width: '300px' }}>
        <h4>Daily Habits</h4>
        <label>
          <input
            type="checkbox"
            checked={tasks.task1.completed}
            onChange={() => handleTaskChange('task1')}
          />
          Drink 8 Glasses of Water
          <input
            type="number"
            value={tasks.task1.points}
            onChange={(e) => handlePointsChange('task1', e)}
            style={{ marginLeft: '10px', width: '60px' }}
            min="1"
          />
          points
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={tasks.task2.completed}
            onChange={() => handleTaskChange('task2')}
          />
          30 Minutes of Exercise
          <input
            type="number"
            value={tasks.task2.points}
            onChange={(e) => handlePointsChange('task2', e)}
            style={{ marginLeft: '10px', width: '60px' }}
            min="1"
          />
          points
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={tasks.task3.completed}
            onChange={() => handleTaskChange('task3')}
          />
          Read for 15 Minutes
          <input
            type="number"
            value={tasks.task3.points}
            onChange={(e) => handlePointsChange('task3', e)}
            style={{ marginLeft: '10px', width: '60px' }}
            min="1"
          />
          points
        </label>
      </div>

      {/* Button to show/hide progress chart */}
      <button onClick={handleToggle}>
        {showChart ? 'Hide Progress Chart' : 'Show Progress Chart'}
      </button>

      {/* Conditionally render the chart */}
      {showChart && (
        <div style={{ width: '100%', height: '300px', marginTop: '20px' }}>
          <Pie data={data} options={{ maintainAspectRatio: false }} />
        </div>
      )}
    </div>
  );
};

export default HabitProgress;
