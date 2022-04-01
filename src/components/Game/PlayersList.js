import React, { useState } from "react";
import '../../style/game.css';

function PlayersList(props){

    const [displayPlayers, setDisplayPlayers] = useState(true);

    return (
        <>
            <div>
                <button class="player-overlay-button" style={displayPlayers ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null} onClick={() => setDisplayPlayers(!displayPlayers)}>Players</button>
                <table class="player-overlay" style={displayPlayers ? { opacity: 1 } : { opacity: 0 }}>
                    <thead>
                        <tr>
                            <th>{`${props.players.length} Onlines`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.players && props.players.map((value, index) =>
                            <tr key={index}>
                                <td>{value.username}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlayersList;