import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
   

    return (
        <TodosContext.Provider value={{ text, setText, taskDescription, setTaskDescription }}>
            {children}
        </TodosContext.Provider>
    );
}

