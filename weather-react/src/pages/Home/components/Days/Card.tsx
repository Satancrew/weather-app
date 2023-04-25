import React from 'react';
import styles from './Days.module.scss';
import { Day } from './Days';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

type Props = {
  day: Day;
};

export const Card = ({ day }: Props) => {
  const { day_id, day_info, icon_id, temp_day, temp_night, info } = day;

  return (
    <div className={styles.card}>
      <div className={styles.day}>{day_id}</div>
      <div className={styles.day__info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.day__temp}>{temp_day}</div>
      <div className={styles.day__night}>{temp_night}</div>
      <div className={styles.day__info}>{info}</div>
    </div>
  );
};
