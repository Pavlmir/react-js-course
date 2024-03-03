import React, { useState } from 'react';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        setItems([...items, inputValue]);
        setInputValue('');
    };

    return (
        <div className="App">
            <header className="App-header">
            <div className="container">
                <div className="popup">
                <p className="popup__text"></p>
                </div>
                <div className="add-task">
                <input 
                    type="text" 
                    className="add-task__input" 
                    value={inputValue} 
                    onChange={handleInputChange} />
                <button 
                    className="btn add-task__btn"
                    onClick={addItem}
                    >Add</button>
                </div>
                <ul className="task-list"
                >
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            </header>
        </div>
    );
}

export { TodoList }