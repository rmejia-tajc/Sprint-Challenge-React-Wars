import React from 'react';

import "./StarWars.css";


function Character(props) {
  console.log(props);
  return (
    <div>
      <h1 className="charName">{props.character.name}</h1>
      <h2 className="birthDate">Born on {props.character.birth_year}</h2>
    </div>
  );
}


export default Character;