import React from "react"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input/Input"
import IconButton from "@material-ui/core/IconButton"
import SendIcon from "@material-ui/core/SvgIcon/SvgIcon"
import './styles/MessageForm.css'

function MessageForm({input, username, sendMessage, setInput}) {
  return (
    <form className="messageForm__form" action="">
      <FormControl className="messageForm__formControl">
        <p className="messageForm__currentUserName">{username}: </p>
        <Input className="messageForm__input" placeholder="Enter a message..." value={input}
               onChange={event => setInput(event.target.value)} type=""/>
        <IconButton className="messageForm__iconButton" disabled={!input}
                    variant="contained"
                    color="primary"
                    onClick={sendMessage}
                    type="submit">
          <SendIcon/>
        </IconButton>
      </FormControl>
    </form>
  )
}

export {
  MessageForm
}