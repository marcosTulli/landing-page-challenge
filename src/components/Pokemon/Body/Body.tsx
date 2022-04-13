import React from 'react';
import classes from './Body.module.scss';
import { Card } from '../Card';
import { Pagination } from '../Pagination';
import { Input } from '../../Input';

interface BodyProps {
  className?: string;
}

const Body: React.FC<BodyProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <Input />
      </div>
      <div className={classes.cardDisplay}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default Body;
