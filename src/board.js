import React from 'react';
import {Square} from './square';

export class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          key = {i}
          value={this.props.squares[i]}
          onClick = {() => this.props.onClick(i)}
        />
      );
    }

    generateRow(rowNumber){
      const row = [];
      for (let i = 0 + rowNumber; i < 3 + rowNumber; i++){
        row.push(this.renderSquare(i + (rowNumber * 2)));
      }
      return (
        <div className="board-row" key={rowNumber}>
          {row}
        </div>
        );
    }

    generateGrid(){
      let grid = [];
      for (let i = 0; i < 3; i++){
        grid.push(this.generateRow(i));
      }
      return grid;
    }
  
    render() {  
      return (
        <div>
         {this.generateGrid()}
        </div>
      );
    }
  }