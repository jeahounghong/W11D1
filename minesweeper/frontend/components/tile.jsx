import React from 'react'
import * as Minesweeper from '../minesweeper'

export default class Tile extends React.Component {
    constructor(props){
        super(props);
        this.tileStatus = this.tileStatus.bind(this);
        this.explored = this.explored.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let flagged = e.altKey;
        this.props.updateGame(this.props.tile, flagged);
    }

    tileStatus() {
        if (this.props.tile.explored) { // explored grey unexplored blue
            if (this.props.tile.bombed) {
                return "💣"
            }  else {
                return (this.props.tile.adjacentBombCount() === 0) ? " " : this.props.tile.adjacentBombCount() 
            }
        } else {
            return this.props.tile.flagged ? "⚑" : "";
        }
    }

    explored(){
        return this.props.tile.explored ? "explored" : "unexplored"
    }

    render() {
        return <div className={this.explored()} onClick={this.handleClick}>
            {this.tileStatus()} 
        </div>
    }
}