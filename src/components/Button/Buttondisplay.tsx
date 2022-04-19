import React from 'react';
import Botones from './Button copy';

const Buttons = () => {
  return (
    <>
      <Botones onClick={() => console.log('americana')} variant='base'>
        Hey
      </Botones>
      <Botones
        onClick={() => {
          console.log('sanguango');
        }}
        variant='primary'>
        Login
      </Botones>
    </>
  );
};

export default Buttons;
