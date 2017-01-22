import React, { Component } from 'react';

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {}
    }
  }

  handleNewUser(e){
  this.setState({newUser:{
    name: this.refs.email.value,
    email: this.refs.email.value,
    password: this.refs.password.value,
    password_confirmation: this.refs.confirm_password.value
  }}, function(){
    console.log(this.state.newUser);
    // this.props.login(this.state.user);
  });
  //add a way to clear form
  e.preventDefault();

}

  render() {
    return (
      <div id="create-user">
        <h3> Or create a new account! </h3>
        <form onSubmit={this.handleNewUser.bind(this)}>
        <div>
          <label>Name</label><br/>
          <input type="text" ref="name" />
        </div>
        <div>
          <label>Email</label><br/>
          <input type="text" ref="email" />
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" ref="password" />
        </div>
        <div>
          <label>Confirm Password</label><br/>
          <input type="password" ref="password_confirmation" />
        </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


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
      <CreateUser />
        <h3> Welcome, please log in! </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Email</label><br/>
          <input type="text" ref="email" />
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" ref="password" />
        </div>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}



export default Login;
