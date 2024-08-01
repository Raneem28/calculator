import React, { useState } from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const firstnum = (event) => {
        setNumber(event.target.value);
    };

    const secondnum = (event) => {
        setNumber2(event.target.value);
    };

    const addition = () => {
        const num1 = parseFloat(number);
        const num2 = parseFloat(number2);
        
        // Check if num1 and num2 are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 + num2;
            setResult(result);
            console.log(result);
        } else {
            setResult('Invalid input');
            console.log('Invalid input');
        }
    };
    const subtraction = () => {
        const num1 = parseFloat(number);
        const num2 = parseFloat(number2);
        
        // Check if num1 and num2 are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 - num2;
            setResult(result);
            console.log(result);
        } else {
            setResult('Invalid input');
            console.log('Invalid input');
        }
    };
    const multiplication = () => {
        const num1 = parseFloat(number);
        const num2 = parseFloat(number2);
        
        // Check if num1 and num2 are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 * num2;
            setResult(result);
            console.log(result);
        } else {
            setResult('Invalid input');
            console.log('Invalid input');
        }
    };
    const division = () => {
        const num1 = parseFloat(number);
        const num2 = parseFloat(number2);
        
        // Check if num1 and num2 are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 / num2;
            setResult(result);
            console.log(result);
        } else {
            setResult('Invalid input');
            console.log('Invalid input');
        }
    };
    return (
        <div className='Calculator-body'>
            <div className='Introduction'>
                <h1>Most simplest calculator!</h1>
            </div>
            <div className='Numbers-and-symbols'>
                <input
                    className='input'
                    type='text'
                    placeholder='Enter the first number'
                    value={number}
                    onChange={firstnum}
                />
                <input
                    className='input'
                    type='text'
                    placeholder='Enter the second number'
                    value={number2}
                    onChange={secondnum}
                />
                <input
                    className='input'
                    type='text'
                    placeholder='Ans will be displayed here'
                    value={result}
                    readOnly //he third input field where the result is displayed is not read-only, which means the user can modify the result manually. It's good practice to make this input field read-only. 
                />
                <div className='all-buttons'>
                    <button className='symbol' onClick={addition}>
                        Addition
                    </button>
                    <button className='symbol' onClick={subtraction}>
                        Subtraction
                    </button>
                    <button className='symbol' onClick={multiplication}>
                        Multiplication
                    </button>
                    <button className='symbol' onClick={division}>
                        Division
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
