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
        onAddTask(text);
        setText('');
    };

    const onAddTask = async (description) => {
        await fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: description,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => {
                console.log(res);
                if (res.status !== 201) {
                    return;
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setTaskDescription((taskDescription) => [...taskDescription, data]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <TodosContext.Provider value={{ text, setText, taskDescription, setTaskDescription, handleAddTask }}>
            {children}
        </TodosContext.Provider>
    );
};

