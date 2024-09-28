import React, { useState, useEffect } from 'react';

const HabitChecklist = ({ habit, setProgress }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Effect to update progress based on completed tasks
  useEffect(() => {
    const completedTasksCount = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? (completedTasksCount / totalTasks) * 100 : 0;

    setProgress(progress); // Update progress percentage in parent component
  }, [tasks, setProgress]);

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask(''); // Clear input after adding
    }
  };

  // Function to handle task completion toggling
  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update task completion status
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h2>{habit} Checklist</h2>

      {/* Input to add a new task */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: '8px 12px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>

      {/* Checklist items */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {tasks.length === 0 && <p>No tasks added yet.</p>}
        {tasks.map((task, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            {task.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default HabitChecklist;
