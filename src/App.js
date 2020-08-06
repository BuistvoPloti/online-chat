import React, {useEffect, useState} from 'react';
import './App.css';
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import {Message} from "./components/Messages/Message"
import {db} from "./firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton"

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
  /*setUsername(() => {
    let name
    while(!name) {
      name = prompt('Enter your name:')
    }
    return name
  })*/
    setUsername('denis223')
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
      <div className="app__header">
        <img className="app__logo"
             src="https://images.squarespace-cdn.com/content/v1/52f848f3e4b013e3f946b704/1398324146489-XYZK7OWX2MEUDGMU0CP9/ke17ZwdGBToddI8pDm48kA-Kl5fm50t9PFBbNYcTon17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeFtrug_8DMjNMmfD56Je50W_xe0fXE8ypYxVkeHD6yW3WUfc_ZsVm9Mi1E6FasEnQ/goldfinch.png"
             alt="prison break reference"/>
        <p className="app__logoNameFirstPart">European</p>
        <p className="app__logoNameSecondPart">goldfinch</p>
      </div>

      <h1>Welcome to 🐀пa2♿ conferention </h1>
      <h2>Seen as <ins>{username}</ins></h2>

      <form className="app__form" action="">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} type=""/>
          <IconButton className="app__iconButton" disabled={!input}
                      variant="contained"
                      color="primary"
                      onClick={sendMessage}
                      type="submit">
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          )
        )}
      </FlipMove>
    </div>
  );
}

export default App;
