import { useState, useEffect } from 'react';
import * as math from 'mathjs';
import styles from './styles.module.css';
import { useResult, useProcess, useHistory } from '../../context/CalculateContext';
import Button from './Button';

export default function Calculator() {
    const { setResult } = useResult();
    const { setProcess } = useProcess();
    const { history, setHistory } = useHistory([]);
    const [text, setText] = useState("");
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        setProcess(text);
        setResult(resultText);
        setHistory(history);
    }, [text, resultText, history, setProcess, setResult, setHistory]);

    const addToProcess = (val) => {
        setText((text) => [...text, val]);
    }

    const calculateResult = () => {
        const input = text.join("")
        setResultText(math.evaluate(input))
        setHistory([...history, input]);
    }

    const changeSign = () => {
        if (resultText > 0) {
            setResultText(-resultText);
        } else {
            setResultText(Math.abs);
        }
    }

    const percentage = () => {
        setResultText(resultText / 100);
    }

    const resetInput = () => {
        setText("");
        setResultText("");
    }


    return (
        <div className={styles.container}>
            <div className={styles.calculator}></div>
            <div className={styles.line}></div>
            <div className={styles.keyboard}>
                <div className={styles.top_keys}>
                    <button className={styles.mkey} onClick={resetInput}>AC</button>
                    <button className={styles.mkey} onClick={changeSign}>+/-</button>
                    <button className={styles.mkey} onClick={percentage}>%</button>
                </div>
                <div className={styles.right_keys}>
                    <button className={styles.mkey} onClick={() => addToProcess("/")}>÷</button>
                    <button className={styles.mkey} onClick={() => addToProcess("*")}>x</button>
                    <button className={styles.mkey} onClick={() => addToProcess("-")}>-</button>
                    <button className={styles.mkey} onClick={() => addToProcess("+")}>+</button>
                    <Button value="=" handleClick={calculateResult} />
                </div>
                <div className={styles.rows}>
                    <div className={styles.numbers_1}>
                        <Button value="1" handleClick={addToProcess} />
                        <Button value="4" handleClick={addToProcess} />
                        <Button value="7" handleClick={addToProcess} />
                        <Button value="." handleClick={addToProcess} />
                    </div>
                    <div className={styles.numbers_2}>
                        <Button value="2" handleClick={addToProcess} />
                        <Button value="5" handleClick={addToProcess} />
                        <Button value="8" handleClick={addToProcess} />
                        <Button value="0" handleClick={addToProcess} />
                    </div>
                    <div className={styles.numbers_3}>
                        <Button value="3" handleClick={addToProcess} />
                        <Button value="6" handleClick={addToProcess} />
                        <Button value="9" handleClick={addToProcess} />
                        <Button value="00" handleClick={addToProcess} />
                    </div>
                </div>
            </div>
        </div>
    )
}
