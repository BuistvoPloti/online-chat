import React, {forwardRef} from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from '@material-ui/core/styles';
import '../Messages/styles/Message.css'

const useStyles = makeStyles({
  card: {
    borderRadius: 30,
  }
});

const Message = forwardRef(({username, message}, ref) => {
  const isCurrentUser = username === message.username
  const classes = useStyles();
  return (
    <div ref={ref} className={`message ${isCurrentUser && 'message__user'}`}>
      <div className="message__sender">{!isCurrentUser && message.username}</div>
      <Card classes={{root: classes.card}} className={isCurrentUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            variant="h3"
            className={isCurrentUser ? "typography__user" : "typography__guest"}>
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export {
  Message
}