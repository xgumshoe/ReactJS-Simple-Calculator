import React, { useState } from 'react'
import './App.css'

function App() {
    const [currentOperand, setCurrentOperand] = useState('0')
    const [previousOperand, setPreviousOperand] = useState('')
    const [operation, setOperation] = useState()

    const operators = {
        '+': (prev, cur) => prev + cur,
        '-': (prev, cur) => prev - cur,
        '*': (prev, cur) => prev * cur,
        '÷': (prev, cur) => prev / cur
    }

    const clear = () => {
        setCurrentOperand('0')
        setPreviousOperand('')
        setOperation()
    }

    const deleteNumber = () => {
        setCurrentOperand(currentOperand.slice(0, -1))
    }

    const appendNumber = (number) => {
        if((number === '.' && currentOperand.includes('.')) || currentOperand.length > 12) return
        setCurrentOperand((currentOperand === '0') ? String(number) : currentOperand + number)
    }

    const chooseOperation = (operation) => {
        if(currentOperand === '') return

        setOperation(operation)
        setPreviousOperand(currentOperand)
        setCurrentOperand('')
    }

    const compute = () => {
        const prev = parseFloat(previousOperand)
        const cur = parseFloat(currentOperand)
        if(isNaN(prev) || isNaN(cur) || !operators[operation]) return
        
        let total = String(operators[operation](prev, cur))
        setCurrentOperand(total)
        setOperation()
        setPreviousOperand('')
    }

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button onClick={() => clear()} className="span-two">AC</button>
            <button onClick={() => deleteNumber()}>DEL</button>
            <button onClick={() => chooseOperation('÷')}>÷</button>
            <button onClick={() => appendNumber(1)}>1</button>
            <button onClick={() => appendNumber(2)}>2</button>
            <button onClick={() => appendNumber(3)}>3</button>
            <button onClick={() => chooseOperation('*')}>*</button>
            <button onClick={() => appendNumber(4)}>4</button>
            <button onClick={() => appendNumber(5)}>5</button>
            <button onClick={() => appendNumber(6)}>6</button>
            <button onClick={() => chooseOperation('+')}>+</button>
            <button onClick={() => appendNumber(7)}>7</button>
            <button onClick={() => appendNumber(8)}>8</button>
            <button onClick={() => appendNumber(9)}>9</button>
            <button onClick={() => chooseOperation('-')}>-</button>
            <button onClick={() => appendNumber('.')}>.</button>
            <button onClick={() => appendNumber(0)}>0</button>
            <button onClick={() => compute()} className="span-two">=</button>
        </div>
    )
}

export default App