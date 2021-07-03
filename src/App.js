import './App.css';
import './assets/style/init.css'
import ChatBox from './containers/ChatBox';

import MessagesProvider from "./context/messagesContext";

function App() {
  return (
    <div className="App">

      <MessagesProvider>
        <ChatBox />
      </MessagesProvider>
    </div>
  );
}

export default App;
