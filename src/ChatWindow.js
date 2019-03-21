import React, { Component } from 'react';

import AddMessage from './AddMessage';

class ChatWindow extends Component {
  


  
  
	render (props){

      
      return (

        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <AddMessage />

            </div>
          </div>
        
  );
}}

export default ChatWindow