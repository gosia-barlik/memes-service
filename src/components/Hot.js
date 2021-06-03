import React from "react";
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import { useSelector } from "react-redux";
import * as io from 'socket.io-client';
import { useState, useEffect, useRef } from 'react';



export default function Hot() {

  const userName = useSelector((state) => state.userName);

  const [messages, setMessages] = useState([]);

  const connection = useRef();

  useEffect(() => {
    connection.current = io.connect("https://chat-server.fbg.pl");
    // Nasłuchiwanie wiadomości
    connection.current.on("chat message", (message) => {
      console.log(message);
      setMessages([...messages, message]);
    }, [])

    return ()=>connection.current.disconnect();
  });

  let message = useRef();

  const setMessage = (e) => {
    message = e.target.value;
  }

  const handleSend = (e) => {
  
  // Wysłanie wiadomośći
    connection.current.emit("chat message", {
      text: message,
      authorId: userName,
    });
  }

  return (
    <Container maxWidth='xl' className='main-container'>
      <Grid
        container
        spacing={4}
        justify='center'
        className='chat-grid-container'>
        <Paper component='form' className='chat-title-wrapper'>
          <Typography className='chat-title'
            variant="h6"
          >
            Hot<br></br>
            Obecnie piszesz jako: {userName}
          </Typography>
        </Paper>
        <Paper component='form' className='chat-wrapper'>
          <IconButton aria-label='menu'>
            <AccountCircleIcon />
          </IconButton>
          <InputBase
            // id='searchInput'
            className='input-chatfield'
            placeholder='Wiadomość'
            inputProps={{ "aria-label": "wiadomość" }}
            onChange={setMessage}
          />
          <IconButton
            type='submit'
            aria-label='wyślij'
            onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Paper>
        {/* <Paper component='form' className='chat-wrapper' id =''> */}
          {
          messages.length>0 && 
            messages.map(message=>{
                return (<div><span><b>{message.authorId}: </b></span><span>{message.text}</span></div>)
              })}
        {/* </Paper> */}
      </Grid>
    </Container>
  );

}

