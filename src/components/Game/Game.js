import React, { Component } from "react";
import '../../style/game.css';

import Piece from './Piece';
import PlayersList from './PlayersList';
import appService from "../../services/appService";

import board from '../../images/sunset.jpg';

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
        window.addEventListener("beforeunload", (e) => 
        {  
            e.preventDefault();
            this.quitGameRoom(this.token)
            return e.returnValue = 'Are you sure you want to close?';
        });
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

    quitGameRoom(token){
        if (token) {
            appService.quitGame(token)
                .then(response => {
                    console.log(response.data)
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {
        return (
            <div class='game-body'>
                <div class='left-bar'>
                    <PlayersList players={this.state.players} />
                </div>
                <img class="board" src={board} alt="Board" />
                <div class="pieces">
                    {this.state.players.map((item, index) => <Piece key={index} username={item} />)}
                </div>
            </div>
        );
    }
}
