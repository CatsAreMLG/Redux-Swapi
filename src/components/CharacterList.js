import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
      {console.log(props)}
    </ul>
  );
};

export default CharacterList;
