import React, { Component, useState } from "react";
import '../../style/login&register.css';

import FormNav from '../navbar-homepage/from-nav.component';
import appService from "../../services/appService";

const RegisterPage = (props) => {

  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirm_password, onChangeConfirm_password] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.onClickSignup(username, password, confirm_password)
    }
  }

  return (
    <div class="Frame">
      <FormNav path="/register" />
      <div class="input_form">
        <input type="text" class="text" name="username" value={username} onChange={(e) => onChangeUsername(e.target.value)} />
        <span>username</span>
        <br />
        <br />
        <input type="password" class="text" name="password" value={password} onChange={(e) => onChangePassword(e.target.value)} onKeyDown={handleKeyDown} />
        <span>password</span>
        <br />
        <input type="password" class="text" name="password" value={confirm_password} onChange={(e) => onChangeConfirm_password(e.target.value)} onKeyDown={handleKeyDown} />
        <span>confirm password</span>
        <hr />
        <button class="signin" onClick={() => props.onClickSignup(username, password, confirm_password)}>Sign up</button>
        <br />
        {props.reqError ? <label >Username has been used. Please try another.</label> : <></>}
        {!confirm_password || password === confirm_password ? <></> : <label >Confirm password is in incorrect.</label>}
      </div>
    </div>
  );
};

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.onClickSignup = this.onClickSignup.bind(this);

    this.state = {
      signedup: false,
      reqError: null
    };

  }

  onClickSignup(username, password, confirm_password) {
    if (password === confirm_password) {
      appService.register(username, password)
        .then(response => {
          this.setState({
            signedup: true,
            reqError: null
          });
          localStorage.setItem("token", JSON.stringify(response.data.token));
          window.location.href = "/home"
        })
        .catch(e => {
          this.setState({
            signedup: false,
            reqError: e
          });
          console.log(e);
        });
    }
  }

  render() {
    return (
      <>
        {this.state.signedup ?
          <div class="Frame">
            <FormNav path="/login" />
            <div class="input_form">
              <label for="checkbox-1-1">Sign Up success...</label>
              <br />
              <label for="checkbox-1-1">Going back to Home page.</label>
            </div>
          </div>
          :
          <RegisterPage onClickSignup={this.onClickSignup} reqError={this.state.reqError} />
        }
      </>
    );
  }
}