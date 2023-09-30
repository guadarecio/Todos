import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {

    const [text, setText] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const handleAddTask = () => {
        const newTask = {
            id: new Date(),
            description: text,
        };

        setTaskDescription([...taskDescription, newTask]);
        setText('');
    };



    return (
        <TodosContext.Provider value={{ text, setText, taskDescription, setTaskDescription, handleAddTask }}>
            {children}
        </TodosContext.Provider>
    );
};

