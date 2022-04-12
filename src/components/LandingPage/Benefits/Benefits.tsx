import React from 'react';
import clock from '../../../assets/Ic_Hour.svg';
import office from '../../../assets/Ic_HomeOffice.svg';
import workshop from '../../../assets/Ic_Workshops.svg';
import snack from '../../../assets/Ic_DrinkSnacks.svg';
import laptop from '../../../assets/Ic_laptop.svg';
import brain from '../../../assets/Ic_brain.svg';
import classes from './Benefits.module.scss';
// import { Divider } from '../../Divider';

const Benefits = () => {
  return (
    <div className={classes.benefits}>
      <div className={classes.benefitsHeading}>
        Entre los beneficios que ofrecemos se encuentran{' '}
        <b className={classes.blue}> ;)</b>
      </div>
      <ul className={classes.iconsGrid}>
        <li className={classes.box}>
          <img src={clock} alt='flexibilidad horaria' />
          <h3 className={classes.text}>
            Flexibilidad <br />
            horaria
          </h3>
        </li>
        <li className={classes.box}>
          <img src={office} alt='Home Office' />
          <h3 className={classes.text}>Home Office</h3>
        </li>
        <li className={classes.box}>
          <img src={workshop} alt='Capacitaciones y Workshops' />
          <h3 className={classes.text}>
            Capacitaciones <br />y Workshops
          </h3>
        </li>
        <li className={classes.box}>
          <img src={snack} alt='Snacks, frutas y bebidas gratis' />
          <h3 className={classes.text}>
            Snacks, frutas <br />y bebidas gratis
          </h3>
        </li>
        <li className={classes.box}>
          <img src={laptop} alt='Semana remota' />
          <h3 className={classes.text}>
            Semana <br />
            remota
          </h3>
        </li>
        <li className={classes.box}>
          <img src={brain} alt='Trabajar en ultimas tecnologias' />
          <h3 className={classes.text}>
            Trabajar <br />
            en ultimas <br />
            tecnologias
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
