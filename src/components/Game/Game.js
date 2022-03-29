import React, { Component } from "react";
import '../../style/game.css';

import Piece from './Piece';
import PlayersList from './PlayersList';
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class='game-body'>
                <div class='left-bar'>
                    <PlayersList />
                </div>
                <div>
                    <Piece />
                </div>
            </div>
        );
    }
}
