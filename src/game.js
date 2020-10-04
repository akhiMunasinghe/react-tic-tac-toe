import React from 'react';
import {calculateWinner, retrieveSpells} from './utils';
import {Board} from './board';
import { Spells } from './spells';

export class Game extends React.Component {
  spellsArray = [];
    constructor(props){ 
      super(props);
      this.state = {
        history : [{
          squares : Array(9).fill(null),
        }],
        xIsNext : true,
        stepNumber: 0,
        spellSelected: {}
      };
    }
  
      async componentDidMount() {
        const spellsRecieved = await retrieveSpells();
        this.spellsArray = spellsRecieved;
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history : history.concat([{
        squares : squares,
        }]),
        xIsNext : !this.state.xIsNext,
        stepNumber: history.length,
        spellSelected: this.spellsArray[Math.floor(Math.random() * this.spellsArray.length)],
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber : step,
        xIsNext : (step % 2) === 0
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move:
          'Go to game start';
        return(
          <li key={move}>
            <button onClick = {() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      })
      let status;
      if(winner){
        status = <div className="winner">Winner: {winner}</div>;
      }
      else{
        status = <div>Next Player: {(this.state.xIsNext ? "X" : "O")}</div>;
      }
      return (
        <div className = "container">
        <div className="game">
          <div className="game-board">
            <Board 
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            {status}
            <ol>{moves}</ol>
          </div>
          </div>
          <div className="spellsBoard">
            <Spells 
              spell={this.state.spellSelected} />
          </div>
          </div>
      );
    }
  }