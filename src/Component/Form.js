import './Form.css';
import { useState } from 'react';

function Form(props) {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const updateHeight = (e) => {
        setHeight(e.target.value);
    }

    const updateWeight = (e) => {
        setWeight(e.target.value);
    }
    const CalculateBMI = (e) => {
        e.preventDefault();
        if (height <= 0 || height > 200)
            document.querySelector('#height').focus();
        else if (weight <= 0)
            document.querySelector('#weight').focus();
        else {
            const hei = parseInt(height);
            const wei = parseFloat(weight);
            const bmi = (wei / ((hei * hei) / 10000)).toFixed(2);
            props.onSubmit({ height: hei, weight: wei, bmi: parseFloat(bmi) });
        }
    }

    return (
        <form onSubmit={CalculateBMI}>
            <div>
                <label>Height (in cms)</label>
                {/* <span id='data'>{170}</span> */}
                <input type='text' id='height' value={height} onChange={updateHeight} autoComplete="off"></input>
            </div>
            <div>
                <label>Weight (in Kgs)</label>
                {/* <span id='data'>{170}</span> */}
                <input type='text' id='weight' value={weight} onChange={updateWeight} autoComplete="off"></input>
            </div>
            <button id='calculate' type='submit'>Calculate</button>
        </form>
    )
}

export default Form;