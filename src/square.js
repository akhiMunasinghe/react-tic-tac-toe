import React from 'react';

export function Square(props){
    let className = "square";
    className += props.value ? " square--"+props.value : "";
    return(
      <button className = {className} onClick = {props.onClick}>
        {props.value}
      </button>
    );
  }