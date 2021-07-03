import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        marginInlineEnd: '20px',
    },
}));


export default function TextBox({ messages, setMessages }) {
    const [message, setMessage] = useState('')


    const handleBtn = () => {
        let messagesTemp = [];
        messages.map((msg) => messagesTemp.push(msg))
        messagesTemp.push({ user: 0, message, date: new Date() });

        setMessages(messagesTemp);
        setMessage("");

        messagesTemp.push({ user: 1, message: "test message", date: new Date() });
        messagesTemp.push({ user: 1, message: "test message", date: new Date() });

    }
    const classes = useStyles();
    return (
        <div className="text-box">
            <textarea
                value={message}
                placeholder="type a message..."
                className="text-input"
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={() => handleBtn()} disabled={!message} variant="contained" className={classes.btn}>Send</Button>
        </div >
    )
}