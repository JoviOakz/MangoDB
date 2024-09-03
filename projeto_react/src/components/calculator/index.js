import { useState } from "react";

export default function Calculator() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <div className="calculator">
            <h1>CALCULADORA CIENTÍFICA MORÔ?</h1>

            <div>
                <input className="input" onChange={(e) => setN1(parseInt(e.target.value))} placeholder="👌"></input>
                <input className="input" onChange={(e) => setN2(parseInt(e.target.value))} placeholder="👌"></input>
            </div>

            <div>
                <button className="button" onClick={() => setResult(n1 + n2)}>+</button>
                <button className="button" onClick={() => setResult(n1 - n2)}>-</button>
                <button className="button" onClick={() => setResult(n1 * n2)}>*</button>
                <button className="button" onClick={() => setResult(n1 / n2)}>/</button>
            </div>

            <h1>Resultado: {result}</h1>
        </div>
    )
}