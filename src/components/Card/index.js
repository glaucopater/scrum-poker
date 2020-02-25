import React, { useState } from "react";
import { SCCard } from "./styles";
import logo from '../../assets/img/logo-250.png';

const Card = ({ value }) => {
  const [selected, setSelected] = useState(false);
  const handleOnClick = () => {
    setSelected(!selected);
  }

  return (
    <SCCard className={(selected ? "picked" : "")} onClick={handleOnClick}>
      <div className="front">
        <span>{value}</span>
        <img src={logo} alt="" />
        <span>{value}</span>
      </div>
      <div className="back">
        <span>{value}</span>
        <img src={logo} alt="" />
        <span>{value}</span>
      </div>
    </SCCard>
  );

}


export default Card;
