import React, {useEffect, useState} from 'react';
import './App.css';
import {db} from "./firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import {Header} from "./components/Header/Header"
import {MessageForm} from "./components/Forms/MessageForm/MessageForm"
import {Messages} from "./components/Messages/Messages"

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      })
  }, [])

  useEffect(() => {
    setUsername(() => {
      let name
      while(!name) {
        name = prompt('Enter your name:')
      }
      return name
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <Header/>
      <MessageForm username={username}
                   input={input}
                   setInput={setInput}
                   sendMessage={sendMessage}
      />
      <FlipMove>
        <Messages messages={messages}
                  username={username}
        />
      </FlipMove>
    </div>
  );
}

export default App;
