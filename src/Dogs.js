import React from 'react';

const Dogs = props => {
  return (
    <ul>
      {props.dogs.map(dog => {
        return <li key={dog}>{dog}</li>;
      })}
    </ul>
  );
};

export default Dogs;
