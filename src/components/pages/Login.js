import React, { Component } from "react";
import '../../style/login&register.css';

import appService from "../../services/appService";
import FormNav from '../from-nav.component';
import Home from "./Home";

const LoginPage = (props) => {

  const [Usename, Password] = props.value;
  const [onChangUsename, onChangPassword, onClickLogin] = props.onChange;

  return (
    <div class="Frame">
      <FormNav path="/login" />
      <div class="input_form">
        <input type="text" class="text" name="username" value={Usename} onChange={onChangUsename} />
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

    this.onChangUsename = this.onChangUsename.bind(this);
    this.onChangPassword = this.onChangPassword.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);

    this.state = {
      usename: "",
      password: "",
      token: ""
    };
  }

  onChangUsename(e) {
    this.setState({
      usename: e.target.value
    });
  }

  onChangPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onClickLogin() {
    appService.login(this.state.usename,this.state.password)
    .then(response => {
        this.props.setToken(response.data);
        // console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
  }

  render() {
    return (
      <LoginPage value={[this.state.usename, this.state.password]} onChange={[this.onChangUsename, this.onChangPassword, this.onClickLogin]} />
    );
  }
}