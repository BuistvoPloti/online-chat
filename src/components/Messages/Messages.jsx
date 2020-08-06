import React from "react"
import {Message} from "./Message"

function Messages({messages, username}) {
  return (
    <div>
      {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        )
      )}
    </div>
  )
}

export {
  Messages
}