import React from 'react';
import styles from './Header.module.scss';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {};

export const Header = (props: Props) => {
  const options = [
    {
      value: 'city-1',
      label: 'Москва',
    },
    {
      value: 'city-2',
      label: 'Хотьково',
    },
    {
      value: 'city-3',
      label: 'Софрино',
    },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: 0 ? '#fff' : '#000',
    }),
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          styles={colourStyles}
          options={options}
          defaultValue={options[1]}
        />
      </div>
    </header>
  );
};
