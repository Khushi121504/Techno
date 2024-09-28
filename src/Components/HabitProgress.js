import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const HabitProgress = ({ progress }) => {
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

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <h3>Habit Progress</h3>
      <Pie data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default HabitProgress;
