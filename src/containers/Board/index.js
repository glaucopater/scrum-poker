import React from "react";
import { SCBoard } from "./styles";
import Card from '../../components/Card';

const Board = ({ values }) => {
  return (
    <SCBoard>
      {values.map(item => (<Card key={item} value={item} />))}
    </SCBoard>
  );
}

export default Board;
