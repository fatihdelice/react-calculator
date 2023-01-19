import React from 'react';
import styles from './styles.module.css';

export default function Button({value, handleClick}) {
  return (
    <button className={styles.key} onClick={()=> handleClick(value)}>
        {value}
    </button>
  )
}
