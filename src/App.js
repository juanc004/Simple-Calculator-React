import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState ([])

  const calculate = (operation) => {
    const num = Number(inputValue);
    setResult((prevResult) => {
      let newResult;
      switch (operation) {
        case '+':
          newResult = prevResult + num
          break;
        case '-':
          newResult = prevResult - num
          break;
        case '*':
          newResult = prevResult * num
          break;
        case '/':
          newResult = num !== 0 ? prevResult /num : "Error";
          break;
        default:
          newResult = prevResult;
      }
      setHistory([...history, `${prevResult} ${operation} ${num} = ${newResult}`]);
      return newResult;
    });
    // Add the operation and result to the history log
    setInputValue(''); // Clear input field after operation
  };

  const reset = () => {
    setInputValue('');
    setResult(0);
    setHistory([]); // Clear the history log
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="result">{result}</div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='number'
        placeholder='Type a number'
      />
      <div className="buttons">
        <button onClick={() => calculate('+')}>add</button>
        <button onClick={() => calculate('-')}>subtract</button>
        <button onClick={() => calculate('*')}>multiply</button>
        <button onClick={() => calculate('/')}>divide</button>
        <button onClick={reset}>reset</button>
      </div>
      {/* History Log */}
      <div className='History'>
        <h2>Calculation History</h2>
        <ul>
          {history.map((entry,index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>  
  );
}

export default App;
