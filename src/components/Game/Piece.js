import React, { useState } from "react";
import '../../style/game.css';

import piece from '../../images/piece.png';

export default function Piece(props) {

    const username = props.username
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const [mousePressed, onMousePressed] = useState(false)
    const [position, setPosition] = useState({ left: 120-screenWidth/2, top: 0 })

    const onPieceDrag = (e) => {
        if (mousePressed && e.clientX-120 > 0 && e.clientY > 0) {
            const leftShift = e.clientX - (screenWidth*0.545)
            const topShift = e.clientY - (screenHeight*0.05);
            setPosition({ left:leftShift, top: topShift });
        }
    }

    return (
        <div class="piece" style={position} onMouseDown={() => onMousePressed(true)} onMouseMove={(e) => onPieceDrag(e)} onMouseUp={()=> onMousePressed(false)}>
            <p class='pieceName'>{username}</p>
            <img class="pieceImg" src={piece} alt="Piece" />
        </div>
    );
}
