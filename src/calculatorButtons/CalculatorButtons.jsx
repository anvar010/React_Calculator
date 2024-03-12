import React,{useContext} from "react";
import UseContextComponent from "../theme/ContextComponent";
import { ThemeContext } from "../theme/ContextComponent";
// import Calculator_Add from "../calculator/Calculator_add";
import './Calculator.css';

function CalculatorButtons({handleButtonClick,handleCalculate,handleClear,inputValue,result}){
  
  const {theme} = useContext(ThemeContext);

    return(
    
    <>
    {/* <div style={{background : theme,color:'red'}}> */}
    

    <div className="display" style={{background : theme,color:'red'}} >
        <p>{inputValue}</p>
        <p>Result : {result}</p>
      </div>
        <div className="calculator" style={{background : theme,color:'red'}}>
        
        <button onClick={()=>handleButtonClick('1')}>1</button>
        <button onClick={()=>handleButtonClick('2')}>2</button>
        <button onClick={()=>handleButtonClick('3')}>3</button>
        <button onClick={()=>handleButtonClick('+')}>+</button>
        <button onClick={()=>handleButtonClick('4')}>4</button>
        <button onClick={()=>handleButtonClick('5')}>5</button>
        <button onClick={()=>handleButtonClick('6')}>6</button>
        <button onClick={()=>handleButtonClick('*')}>x</button>
        <button onClick={()=>handleButtonClick('7')}>7</button>
        <button onClick={()=>handleButtonClick('8')}>8</button>
        <button onClick={()=>handleButtonClick('9')}>9</button>
        <button onClick={()=>handleButtonClick('/')}>/</button>
        <button onClick={handleClear}>CLEAR</button>
        <button onClick={()=>handleButtonClick('0')}>0</button>
        
       
        <button onClick={handleCalculate}>=</button>
        <button onClick={()=>handleButtonClick('-')}>-</button>
        </div>
        
        {/* <Calculator_Add/> */}
        {/* <div className="display">
        <p>{inputValue}</p>
        <p>Result : {result}</p>
      </div> */}
        {/* </div> */}
        {/* <ThemedComponent/> */}
        {/* <UseContextComponent/> */}
        
        </>
        
    )
}
export default CalculatorButtons;