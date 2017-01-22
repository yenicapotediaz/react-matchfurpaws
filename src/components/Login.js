import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  handleSubmit(e){
  this.setState({user:{
    email: this.refs.email.value,
    password: this.refs.password.value
  }}, function(){
    console.log(this.state.user);
    // this.props.login(this.state.user);
  });
  //add a way to clear form
  e.preventDefault();

}

  render() {
    return (
      <div id="login">
        <h3> Welcome, please log in! </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Email</label><br/>
          <input type="text" ref="email" />
        </div>
        <div>
          <label>Password</label><br/>
          <input type="text" ref="password" />
        </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default Login;
