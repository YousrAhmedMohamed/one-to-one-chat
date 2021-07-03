import React, { useEffect } from "react";
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';

export default function ChatHistory({ messages, avatar1 }) {


    useEffect(() => { }, [messages]);

    return (
        <div className="history-container">
            {messages.map((msg, i) => {
                return <div key={messages[i]} className={msg.user === 1 ? "msg-avatar" : "message-container"}>
                    <Avatar
                        src={avatar1}
                        style={{
                            marginInlineEnd: '5px',
                            display: msg.user === 1 ? 'flex' : 'none',
                            visibility: (messages[i + 1]?.user === 0 && messages[i]?.user === 1)
                                || i === messages.length - 1 ? 'visibility' : 'hidden'
                        }}
                    />
                    <div className={msg.user === 0 ? 'me-box' : 'interlocutor-box'}>
                        <span>{msg.message}</span>
                        <span className="date">{moment(msg.date).format('h:mm:ss a')}</span>
                    </div>
                </div>
            })}
        </div >
    )
}