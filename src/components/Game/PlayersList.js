import React, { useState } from "react";
import '../../style/game.css';

function PlayersList(props){

    const [displayPlayers, setDisplayPlayers] = useState(false);

    return (
        <>
            <button class="player-overlay-button" style={displayPlayers ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null} onClick={() => setDisplayPlayers(!displayPlayers)}>Players</button>
            <div>
                <table class="player-overlay" style={displayPlayers ? { opacity: 1 } : { opacity: 0 }}>
                    <thead>
                        <tr>
                            <th>{`${props.players.length} Onlines`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.players && props.players.map((value, index) =>
                            <tr key={index}>
                                <td>{value}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlayersList;