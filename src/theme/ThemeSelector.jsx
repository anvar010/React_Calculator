import React,{useContext} from "react";
import { ThemeContext } from "./ContextComponent";
import '../calculatorButtons/Calculator.css'



export default function ThemeSelector(){
    const {setTheme} = useContext (ThemeContext);
    return(
        <>
        <button onClick={()=>setTheme('white')} className="selector1">Light Mode</button>
        <button onClick={()=>setTheme('#454545')} className="selector">Dark Mode</button>
        </>
    )
}