export default function Display(inputValue,result){
    return(
      <>
        <div className="display">
        <p>{()=>inputValue}</p>
        <p>Result : {()=>result}</p>
      </div>
      </>
    )
}