import React, { useState, useEffect } from 'react';

const Component = () => {
    const [names, setNames] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const savedNames = localStorage.getItem('names');
        if (savedNames) {
            setNames(JSON.parse(savedNames));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('names', JSON.stringify(names));
    }, [names]);

    const addName = () => {
        if (name.trim()) {
            setNames([...names, name]);
            setName('');
        }
    };

    return (
        <div>
            <h1>Список имён</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={addName}>Добавить</button>
            <ul>
                {names.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </div>
    );
};

export default Component;
