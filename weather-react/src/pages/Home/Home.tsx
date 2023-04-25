import React from 'react';
import styles from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
    </div>
  );
};
