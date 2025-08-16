import React, { useState } from 'react';
import './List.css';

function List() {
  const [name, setname] = useState("");
  const [final, setfinal] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setfinal([...final, { text: name, completed: false }]); 
    setname("");
  }

  function handleDelete(x) {
    setfinal(final.filter((_, i) => i !== x));
  }

  function handleTick(x) {
    setfinal(
      final.map((task, i) =>
        i === x ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <h1>To-do App</h1>
      <div className="submit-form">
        <form onSubmit={handleSubmit} className="input-with-btn">
          <input
            type="text"
            placeholder="Add your task"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <button type="submit" className="inside-btn">Add</button>
        </form>

        {final.map((task, x) => (
          <div className="datas" key={x}>
            <h5 className={task.completed ? "blurred" : ""}>{task.text}</h5>
            <button className="tick" onClick={() => handleTick(x)}>✓</button>
            <button className="delete" onClick={() => handleDelete(x)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
