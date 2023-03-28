import React from "react";
import Letter from "./Letter";

export default function Letters() {
  let letters = [
    " A ",
    " B ",
    " C ",
    " D ",
    " E ",
    " F ",
    " G ",
    " H ",
    " I ",
    " J ",
    " K ",
    " L ",
    " M ",
    " N ",
    " O ",
    " P ",
    " Q ",
    " R ",
    " S ",
    " T ",
    " U ",
    " V ",
    " W ",
    " X ",
    " Y ",
    " Z ",
  ];
  return (
    <div>
      <Letter />
      {letters.map((l) => (
        <span>{l}</span>
      ))}
    </div>
  );
}
