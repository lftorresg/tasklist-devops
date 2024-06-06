import React from "react";

import styles from './styles.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt='logo' />
        <h1>TaskList</h1>
      </header>
    </>
  );
}
