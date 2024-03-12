import React, { useState } from "react";
import CalculatorButtons from "../calculatorButtons/CalculatorButtons";
// import Display from "../display/Display";
// import UseContextComponent from "../theme/ContextComponent";

export default function Calculator_Add() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInputValue((prevInput) => prevInput + value);
  };
  

  const HandleCalculate = () => {
    setResult(eval(inputValue));
  }

  const handleClear = () => {
    setInputValue('');
    setResult('');
  };

  return (
    <>
    {/* <Display 
    inputValue={inputValue}
    result={result}
    /> */}
      <CalculatorButtons
        handleButtonClick={handleButtonClick}
        handleClear={handleClear}
        handleCalculate={HandleCalculate}
        inputValue={inputValue}
        result={result}
      />
      
      
      

    </>
  )
}
