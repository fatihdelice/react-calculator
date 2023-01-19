import React from 'react';
import styles from './styles.module.css';
import Sun from './icons/sun.svg';
import Moon from './icons/moon.svg';
import { useTheme } from '../../context/ThemeContext'

export default function Toggle() {
    const { theme, setTheme } = useTheme();
    return (
        <div className={styles.toggle} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <span className={styles.switch}></span>
            <img src={Sun} className={styles.sun} alt="sun" />
            <img src={Moon} className={styles.moon} alt="moon"/>
        </div>
    )
}
