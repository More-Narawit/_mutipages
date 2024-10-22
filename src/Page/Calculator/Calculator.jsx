import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('0');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');
  const [lastOperator, setLastOperator] = useState('');
  const [lastOperand, setLastOperand] = useState(null);
  const [memory, setMemory] = useState(0);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const formatNumber = (value) => {
    const [integer, decimal] = value.split('.');
    const formattedInteger = parseFloat(integer).toLocaleString();
    return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
  };

  const handleNumberKey = (value) => {
    if (isResultDisplayed) {
      setCurrentInput(value);
      setIsResultDisplayed(false);
    } else {
      setCurrentInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handleOperatorKey = (key) => {
    if (previousInput && operator) {
      calculate();
    }
    setPreviousInput(currentInput);
    setCurrentInput('0');
    setOperator(key);
    setLastOperator('');
    setLastOperand(null);
  };

  const calculate = () => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = current === 0 ? 'Error' : prev / current;
        break;
      default:
        return;
    }

    setCurrentInput(result.toString());
    setIsResultDisplayed(true);
    setPreviousInput(result.toString());
    setLastOperator(operator);
    setLastOperand(current);
  };

  const handleEquals = () => {
    if (operator && !isResultDisplayed) {
      // Perform calculation with the current operator and current input
      calculate();
    } else if (lastOperator && lastOperand !== null) {
      // If no new operator is set, use the last operator and operand for repeated calculation
      const current = parseFloat(currentInput);
      let result;

      switch (lastOperator) {
        case '+':
          result = current + lastOperand;
          break;
        case '-':
          result = current - lastOperand;
          break;
        case '×':
          result = current * lastOperand;
          break;
        case '÷':
          result = lastOperand === 0 ? 'Error' : current / lastOperand;
          break;
        default:
          return;
      }

      setCurrentInput(result.toString());
      setIsResultDisplayed(true);
      setPreviousInput(result.toString());
    }
  };

  const handleClear = () => {
    setCurrentInput('0');
    setPreviousInput('');
    setOperator('');
    setLastOperator('');
    setLastOperand(null);
  };

  const handleMemory = (action) => {
    if (action === 'M+') {
      setMemory(memory + parseFloat(currentInput));
    } else if (action === 'M-') {
      setMemory(memory - parseFloat(currentInput));
    } else if (action === 'MR') {
      setCurrentInput(memory.toString());
    } else if (action === 'MC') {
      setMemory(0);
    }
  };

  const calculatePercentage = () => {
    const current = parseFloat(currentInput);
    setCurrentInput((current / 100).toString());
  };

  const calculateSquareRoot = () => {
    const current = parseFloat(currentInput);
    setCurrentInput(Math.sqrt(current).toString());
  };

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={formatNumber(currentInput)} disabled />
      <div className="calculator-keys">
        <button onClick={() => handleMemory('MC')} className="memory calButton">MC</button>
        <button onClick={() => handleMemory('MR')} className="memory calButton">MR</button>
        <button onClick={() => handleMemory('M+')} className="memory calButton">M+</button>
        <button onClick={() => handleMemory('M-')} className="memory calButton">M-</button>

        <button onClick={() => handleClear()} className="operator calButton" id="clear">CE</button>
        <button onClick={() => handleNumberKey('7')} className="number calButton">7</button>
        <button onClick={() => handleNumberKey('8')} className="number calButton">8</button>
        <button onClick={() => handleNumberKey('9')} className="number calButton">9</button>
        <button onClick={() => handleOperatorKey('÷')} className="operator calButton">÷</button>
        <button onClick={() => handleOperatorKey('×')} className="operator calButton">×</button>

        <button onClick={() => handleNumberKey('4')} className="number calButton">4</button>
        <button onClick={() => handleNumberKey('5')} className="number calButton">5</button>
        <button onClick={() => handleNumberKey('6')} className="number calButton">6</button>
        <button onClick={() => handleOperatorKey('-')} className="operator calButton">−</button>
        <button onClick={() => calculateSquareRoot()} className="operator calButton">√</button>

        <button onClick={() => handleNumberKey('1')} className="number calButton">1</button>
        <button onClick={() => handleNumberKey('2')} className="number calButton">2</button>
        <button onClick={() => handleNumberKey('3')} className="number calButton">3</button>
        <button onClick={() => handleOperatorKey('+')} className="operator calButton">+</button>

        <button onClick={() => calculatePercentage()} className="operator calButton">%</button>
        <button onClick={() => handleNumberKey('0')} className="number calButton" style={{ gridColumn: 'span 2' }}>0</button>
        <button onClick={() => handleNumberKey('.')} className="number calButton">.</button>
        <button onClick={() => handleEquals()} className="operator calButton" id="equals">=</button>
      </div>
    </div>
  );
}

export default Calculator;