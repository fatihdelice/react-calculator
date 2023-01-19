import React from 'react';
import styles from './styles.module.css';
import { useResult, useProcess } from '../../context/CalculateContext';


export default function Result() {
    const { result } = useResult();
    const { process } = useProcess();
    return (
        <div>
            <div className={styles.process}>
                <span>{process}</span>
            </div>
            <div className={styles.result}>
                <span>=</span>
                <span>{result}</span>
            </div>
        </div>
    )
}
