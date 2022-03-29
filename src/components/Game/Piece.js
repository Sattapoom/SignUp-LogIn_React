import React, { Component } from "react";
import '../../style/game.css';

import piece from '../../images/piece.png';

export default class Piece extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img class="piece" src={piece} alt="Piece" />
        );
    }
}
