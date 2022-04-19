import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import classes from './Pagination.module.scss';

function Pagination() {
  return (
    <div className={classes.container}>
      <MdArrowBackIosNew className={classes.arrow} />
      <p>1 - 2 - 3 - 4 - 5 ... 10</p>
      <MdArrowForwardIos className={classes.arrow} />
    </div>
  );
}

export default Pagination;
