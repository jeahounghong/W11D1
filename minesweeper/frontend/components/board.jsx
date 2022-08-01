import React from 'react'
import * as Minesweeper from '../minesweeper'
import Tile from './tile'

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="board">
            {this.props.board.grid.map((row,i) =>{
                return <div key={i} className="row">
                {row.map((tile,j)=>{
                       return <Tile key={j} tile={tile} updateGame={this.props.updateGame}/>
                    })}
                </div>
            })}
        </div>
    }
}