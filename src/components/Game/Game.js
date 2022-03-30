import React, { Component } from "react";
import '../../style/game.css';

import Piece from './Piece';
import PlayersList from './PlayersList';
import appService from "../../services/appService";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.token = JSON.parse(localStorage.getItem("token"));
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        this.joinGame(this.token);
        setInterval(() => {
            this.reloadOnlinePlayer();
        }, 2000);
    }

    async reloadOnlinePlayer() {
        await appService.getOnlinePlayer()
            .then(response => {
                this.setState({ players: response.data.players });
            })
            .catch(e => {
                console.log(e);
                window.location.href = "/home";
            });
    }

    async joinGame(token) {
        if (token) {
            await appService.joinGame(token)
                .then(response => {
                    this.setState({ players: response.data.players });
                })
                .catch(e => {
                    console.log(e);
                    localStorage.removeItem("token");
                    window.location.href = "/home";
                });
        }
        else {
            window.location.href = "/home";
        }
    }

    render() {
        return (
            <div class='game-body'>
                <div class='left-bar'>
                    <PlayersList players={this.state.players} />
                </div>
                <div>
                    <Piece />
                </div>
            </div>
        );
    }
}
