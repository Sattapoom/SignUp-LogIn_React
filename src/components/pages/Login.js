import React, { Component } from "react";
import '../../style/login&register.css';

import FormNav from '../navbar-homepage/from-nav.component';
import appService from "../../services/appService";

const LoginForm = (props) => {

  const [username, Password] = props.value;
  const [onChangUsername, onChangPassword, onClickLogin] = props.onChange;

  return (
    <div class="Frame">
      <FormNav path="/login" />
      <div class="input_form">
        <input type="text" class="text" name="username" value={username} onChange={onChangUsername} />
        <span>username</span>
        <br />
        <br />
        <input type="password" class="text" name="password" value={Password} onChange={onChangPassword} />
        <span>password</span>
        <br />
        <input type="checkbox" id="checkbox-1-1" class="custom-checkbox" />
        <label for="checkbox-1-1">Keep me Signed in</label>
        <hr />
        <button class="signin" onClick={onClickLogin} >Log in</button>
        <a class="mini-link" href="forgotpassword">Forgot Password?</a>
      </div>
    </div>
  );
};

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.onChangUsername = this.onChangUsername.bind(this);
    this.onChangPassword = this.onChangPassword.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);

    this.state = {
      username: "",
      password: "",
      loggedin: false
    };
  }

  onChangUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onClickLogin() {
    appService.login(this.state.username, this.state.password)
      .then(response => {
        this.setState({
          loggedin: true
        });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        window.location.href = "/home"
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        {this.state.loggedin ?
          <div class="Frame">
            <FormNav path="/login" />
            <div class="input_form">
              <label for="checkbox-1-1">Logged In...</label>
            </div>
          </div>
          :
          <LoginForm value={[this.state.username, this.state.password]} onChange={[this.onChangUsername, this.onChangPassword, this.onClickLogin]} />
        }
      </>
    );
  }
}
