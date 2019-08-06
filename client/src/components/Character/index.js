import React from 'react';
import propTypes from 'prop-types';

import { CharacterCard } from './styled-components';

const Character = (props)=> {

  // const stats = props.stats.map((stat) => 
  //   <li key={props.id}
  //     value={stat} /> 
  // );


  return(
    <CharacterCard>
      <h1>{props.name}</h1>
        <ul>
        </ul>
      <button>X</button>
    </CharacterCard>
  )
}

Character.propTypes = {
  title: propTypes.string,
  id: propTypes.string,
  stats: propTypes.array
}

export default Character;