import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { borderRadius } from '@material-ui/system';
import '../Messages/styles/Message.css'

function Message({username, message}) {
  const isCurrentUser = username === message.username
  return (
    <div className={`message ${isCurrentUser && 'message__user'}`}>
      <Card className={isCurrentUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            color="white"
            variant="h5"
            component="h2">
            {username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export {
  Message
}