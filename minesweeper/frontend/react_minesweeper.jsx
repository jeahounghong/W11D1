import Game from './components/game'
import React from 'react'
import ReactDOM from 'react-dom'

function Root(){
    return(
        <div className="game">
            <h2>Minesweeper</h2>
            <Game/>
            <div className="modal hide"> 
                    <div className="modal-screen">
                        
                    </div>
                    <div className="modal-content">
                        
                    </div>
            </div>
       </div>
    );
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root/>, document.getElementById("root"))
})