import React from 'react';
import Botones from './Button copy';

function Buttons() {
  return (
    <>
      <Botones onClick={() => console.log('americana')} variant="base">
        Hey
      </Botones>
      <Botones
        onClick={() => {
          console.log('sanguango');
        }}
        variant="primary"
      >
        Login
      </Botones>
    </>
  );
}

export default Buttons;
