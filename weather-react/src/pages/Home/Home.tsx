import React from 'react';
import styles from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay';

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <ThisDay />
    </div>
  );
};
