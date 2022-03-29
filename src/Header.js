import React from "react";
import trollface from "./trollface.png";

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={trollface} />
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </div>
  );
}
