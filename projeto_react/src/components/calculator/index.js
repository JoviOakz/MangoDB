import { useState } from "react";
import styles from './styles.module.scss';

export default function Calculator() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div className={styles.page}>
            <div className={styles.form}>
                <h1>CALCULADORA CIENTÍFICA MORÔ?</h1>

                <div>
                    <input className={styles.input} onChange={(e) => setN1(parseInt(e.target.value))} placeholder="👌"></input>
                    <input className={styles.input} onChange={(e) => setN2(parseInt(e.target.value))} placeholder="👌"></input>
                </div>

                <div>
                    <button className={styles.button} onClick={() => setResult(n1 + n2)}>+</button>
                    <button className={styles.button} onClick={() => setResult(n1 - n2)}>-</button>
                    <button className={styles.button} onClick={() => setResult(n1 * n2)}>*</button>
                    <button className={styles.button} onClick={() => setResult(n1 / n2)}>/</button>
                </div>

                <h1>Resultado: {result}</h1>
            </div>
        </div>
    )
}