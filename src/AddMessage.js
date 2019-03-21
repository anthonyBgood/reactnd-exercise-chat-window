import React, { Component } from 'react';

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */


class AddMessage extends Component {

  state ={ message: '',}


  render (props){
  
  function buttonHandler(e){
        e.preventDefault();  
     }

  function inputHandler(e){
   this.setState((oldState, e) => ({message: e.value}))
  }

  
  return(
  
  <form className="input-group">
    <input type="text" className="form-control" placeholder="Enter your message..." onChange ={inputHandler}/>
    <div className="input-group-append">
      <button className="btn submit-button" onClick={buttonHandler} >
        SEND
      </button>
		<p value={this.state.message}></p>
    </div>
   </form>
  
);
}}

export default AddMessage