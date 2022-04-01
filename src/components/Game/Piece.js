import React, { useEffect, useRef, useState } from "react";
import '../../style/game.css';

import piece from '../../images/piece.png';
import useDraggable from "./useDraggable";
import appService from "../../services/appService";

const updatePosition = (index, username, pos) => {
    const DATA = {
        index: index,
        username: username,
        piecePos: pos
    }
    appService.updateGameState(DATA)
        .then(response => {
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });
}

export default function Piece({ index, player }) {

    const cardRef = useRef(null);
    const [DX, setDX] = useState(player.piecePos.x);
    const [DY, setDY] = useState(player.piecePos.y);

    useDraggable(cardRef, DX, DY, setDX, setDY);

    useEffect(() => {
        setDX(player.piecePos.x);
        setDY(player.piecePos.y);
    }, [player.piecePos]);

    return (
        <div className="piece" ref={cardRef} onMouseUp={() => updatePosition(index, player.username, { x: DX, y: DY })}>
            <p class="pieceName">{player.username}</p>
            <img class="pieceImg" src={piece} alt="Piece" />
        </div>
    );
}
