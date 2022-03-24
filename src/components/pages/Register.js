import React, { Component, useState } from "react";
import '../../style/login&register.css';

import FormNav from '../from-nav.component';
import appService from "../../services/appService";

const RegisterPage = (props) => {

  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirm_password, onChangeConfirm_password] = useState('');

  return (
    <div class="Frame">
      <FormNav path="/register" />
      <div class="input_form">
        <input type="text" class="text" name="username" value={username} onChange={(e) => onChangeUsername(e.target.value)} />
        <span>username</span>
        <br />
        <br />
        <input type="password" class="text" name="password" value={password} onChange={(e) => onChangePassword(e.target.value)} />
        <span>password</span>
        <br />
        <input type="password" class="text" name="password" value={confirm_password} onChange={(e) => onChangeConfirm_password(e.target.value)} />
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
          this.props.setToken(response.data);
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
      <RegisterPage onClickSignup={this.onClickSignup} reqError={this.state.reqError} />
    );
  }
}