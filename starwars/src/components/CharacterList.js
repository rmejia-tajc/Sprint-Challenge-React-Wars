import React from "react";
import Character from "./Character";

function CharacterList(props) {
  return (
    <div>
      {props.starwarsChars.map((character, index) => {
        return (
            <Character 
                character={character}
                key={index}
            />
        );
      })}
    </div>
  );
}

export default CharacterList;
