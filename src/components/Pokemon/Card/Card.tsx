import React from 'react';
import classes from './Card.module.scss';
import charmander from '../../../assets/charmander.png';

const Card = () => {
  return (
    <div className={classes.cardContainer}>
      <img src={charmander} alt='charmander' className={classes.cardImage} />
      <p className={classes.cardText}> Nombre </p>
    </div>
  );
};

export default Card;
