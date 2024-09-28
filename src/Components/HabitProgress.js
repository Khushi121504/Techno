import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const HabitProgress = ({ progress }) => {
  const [showChart, setShowChart] = useState(false); // State to toggle chart visibility

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Progress',
        data: [progress, 100 - progress], // Data for completed and remaining
        backgroundColor: ['#36A2EB', '#FFCE56'], // Color for completed and remaining
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'], // Hover colors
      },
    ],
  };

  const handleToggle = () => {
    setShowChart(!showChart); // Toggle the state to show/hide chart
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3>Habit Progress</h3>
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
