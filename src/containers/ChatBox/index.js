import React, { useContext } from "react";
import Header from '../../components/chatHeader';
import TextBox from "../../components/textBox";
import ChatHistory from "../../components/chatHistory";
import { MessagesContext } from "../../context/messagesContext";
import Avatar1 from '../../assets/images/av1.png';

export default function ChatBox() {

    const [messages, setMessages] = useContext(MessagesContext);

    return (<div className="chat-container">
        <Header avatar1={Avatar1} />
        <ChatHistory messages={messages} avatar1={Avatar1} />
        <TextBox setMessages={setMessages} messages={messages} />
    </div>
    )

}