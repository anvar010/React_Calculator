import React,{createContext,useState} from "react";
import ThemeSelector from "./ThemeSelector";
// import ThemedComponent from "./ThemedComponent";
// import CalculatorButtons from "../calculatorButtons/CalculatorButtons";
import Calculator_Add from "../calculator/Calculator_add";

export const ThemeContext =createContext('black');

function UseContextComponent(){
    const [theme,setTheme]=useState('white');
    const contextValue={theme,setTheme};

    return(
        <>
        <ThemeContext.Provider value={contextValue}>
            {/* <CalculatorButtons/> */}
            <Calculator_Add/>
            <ThemeSelector/>

        </ThemeContext.Provider>
        {/* <Calculator_Add/> */}
        </>
    )
}
export default UseContextComponent;