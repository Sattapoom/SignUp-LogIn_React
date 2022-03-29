import React, { Component } from "react";
import '../../style/app.css';

import FormNav from '../navbar-homepage/from-nav.component';
import appService from '../../services/appService';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.token = JSON.parse(localStorage.getItem("token"));
        this.state = {
            username: ""
        };
    }

    componentDidMount() {
        this.getUsernameByToken(this.token)
    }

    getUsernameByToken(token) {
        if (this.token) {
            appService.welcome(token)
                .then(response => {
                    this.setState({ username: response.data.username });
                })
                .catch(e => {
                    console.log(e);
                    localStorage.removeItem("token");
                    window.location.href = "";
                });
        }
    }

    checkLoggedIn() {
        if (this.token) {
            return true;
        }
        return false;
    }

    requireLoggedIn = () => {
        return (
            <>
                <br /><br /><br />
                <h3>You are not Loged in.</h3>
                <h3>Please Log in or Sign up.</h3>
                <br /><br /><br /><br />
                <button class="signin" onClick={() => (window.location.href = "/login")}>Log In</button>
                <button class="signin" onClick={() => (window.location.href = "/register")}>Sign Up</button>
            </>
        );
    }

    playable = () => {
        return (
            <>
                <br /><br /><br />
                <h1 style={{ textTransform: null }}>{`Welcome ${this.state.username}`}</h1>
                <br /><br /><br />
                <button class="signin" onClick={() => (window.location.href = "/playgame")}>Play</button>
            </>
        );
    }

    render() {
        return (
            <div class="Frame">
                <FormNav path="/home" />
                {this.checkLoggedIn() ? <this.playable /> : <this.requireLoggedIn />}
            </div>
        );
    }
}
