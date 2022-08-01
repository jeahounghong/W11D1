import React from 'react'
import * as Minesweeper from '../minesweeper'
import Board from './board'
// import Modal from './'

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(9,9)
        }
        this.updateGame = this.updateGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    updateGame(tile, flagged){ // tile is a tile instance from minesweeper
        if (flagged) {
            tile.toggleFlag()
        } else {
            tile.explore()
        }

        this.setState({
            board: tile.board
        })
    }

    gameOver() { 
        const modal = document.getElementsByClassName("modal-content")[0];
        if (this.state.board.won()) {
            modal.innerHTML = "You won!"
            return true;
        }
        else if (this.state.board.lost()) {
            modal.innerHTML = "You lost!"
            return true;
        } else {
            return false;
        }
    }

    render(){
        if (this.gameOver()){
            const modal = document.getElementsByClassName("modal")[0];
            modal.classList.remove("hide");
        };
        return (<Board board={this.state.board} updateGame={this.updateGame}/>)
    }

}