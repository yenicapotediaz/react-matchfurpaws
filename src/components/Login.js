import React, { Component } from 'react';
import $ from 'jquery';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      userKey: {}
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

getUser() {
  $.ajax({
    url:  'http://matchfurpaws-api.herokuapp.com/login',
    method: 'POST',
    data: {
      "email": "yeni@gmail.com",
    	"password": "joaquin"
    },
    contentType:'json',
    cache: false,
    success: function(data){
      this.setState({userKey: data}, function(){
        console.log(data);
      });
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
  });
}

componentWillMount(){
  this.getUser();
}

componentDidMount(){
  this.getUser();
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
          <input type="password" ref="password" />
        </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default Login;
