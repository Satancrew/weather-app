import React from 'react';
import styles from './Days.module.scss';
import { Card } from './Card';

type Props = {};

export type Day = {
  day_id: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day_id: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_id: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь и солнце',
    },
    {
      day_id: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day_id: 'Чт',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_id: 'Пт',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_id: 'Сб',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day_id: 'Вс',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
  ];
  return (
    <div className={styles.days}>
      {days.map((day: Day) => (
        <Card key={day.day_id} day={day} />
      ))}
    </div>
  );
};
