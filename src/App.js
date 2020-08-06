import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import {Message} from "./components/Messages/Message"
import {db} from "./firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
      })
  }, [])

  useEffect(() => {
    //setUsername(prompt('Enter your name:'))
    setUsername('denis1264')
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
      <h1>Welcome to online chat </h1>
      <h2>Seen as <ins>{username}</ins></h2>

      <form action="">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} type=""/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage}
                  type="submit">send</Button>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({id,message}) => (
          <Message key={id} username={username} message={message}/>
          )
        )}
      </FlipMove>
    </div>
  );
}

export default App;
