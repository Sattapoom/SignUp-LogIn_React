import React, { Component } from "react";
import '../../style/app.css';

import FormNav from '../from-nav.component';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.token = props.token;
    }

    checkLoggedIn() {
        if (this.token !== "") {
            return true;
        }
        return false;
    }

    requireLoggedIn = () => {
        return (
            <>
                <br /><br /><br />
                <h3>You are not loged in.</h3>
                <h3>Please log in.</h3>
                <button class="signin">Log In</button>
            </>
        );
    }

    playable = () => {
        return (
            <button class="signin">Play</button>
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
