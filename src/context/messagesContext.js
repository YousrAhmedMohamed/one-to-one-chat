
import React, { createContext, useState } from "react";


export const MessagesContext = createContext([]);

const MessagesProvider = ({ children }) => {

    const [messages, setMessages] = useState([{ user: 0, message: 'hello', date: 'Sat Jul 03 2021 16:12:36 GMT+0200' },
    { user: 0, message: 'how are you', date: 'Sat Jul 03 2021 16:12:37 GMT+0200' },
    { user: 0, message: 'are you there?', date: 'Sat Jul 03 2021 16:12:37 GMT+0200' },
    { user: 1, message: 'hello', date: 'Sat Jul 03 2021 16:12:40 GMT+0200' },
    { user: 1, message: 'yes, fine thanks', date: 'Sat Jul 03 2021 16:12:40 GMT+0200' },
    { user: 1, message: 'how are you too?', date: 'Sat Jul 03 2021 16:12:41 GMT+0200' }
    ])

    const addMessages = (value) => {
        setMessages(value);
    };
    return (
        <MessagesContext.Provider value={[messages, addMessages]}>
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesProvider;