import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import {Message} from "./components/Messages/Message"

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(()=>{
    setUsername(prompt('Enter your name:'))
  },[])

  /* console.log(input)
   console.log(messages)*/

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>welcome to online chat </h1>

      <form action="">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} type=""/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage}
                  type="submit">send</Button>
        </FormControl>
      </form>

      {messages.map(text => (
          <Message text={text}/>
        )
      )}
    </div>
  );
}

export default App;
