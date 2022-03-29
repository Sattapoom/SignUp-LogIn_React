import React, { Component } from "react";
import '../../style/game.css';

export default class PlayersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPlayers: false,
            players: []
        };
    }

    render() {
        return (
            <>
                <button class="player-overlay-button" style={this.state.displayPlayers ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null} onClick={() => this.setState({ displayPlayers: !this.state.displayPlayers })}>Players</button>
                <div>
                    <table class="player-overlay" style={this.state.displayPlayers ? { opacity: 1 } : { opacity: 0 }}>
                        <thead>
                            <tr>
                                <th>{`${this.state.players.length} Onlines`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.players && this.state.players.map((players, index) =>
                                <tr key={players._id}>
                                    <td>{players.username}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
