import React,{Component} from "react";
import '../../style/login&register.css';

import FormNav from '../from-nav.component';

const RegisterPage = () => {
  return (
    <div class="Frame">
      <FormNav path="/register"/>
      <form>

        <input type="text" class="text" name="username" />
        <span>username</span>
        <br />
        <br />
        <input type="password" class="text" name="password" />
        <span>password</span>
        <br />
        <input type="password" class="text" name="password" />
        <span>confirm password</span>
        <hr />
        <button class="signin" >Sign up</button>
      </form>
    </div>
  );
};

export default class Login extends Component{
  render(){
      return(
        <RegisterPage />
      );
  }
}