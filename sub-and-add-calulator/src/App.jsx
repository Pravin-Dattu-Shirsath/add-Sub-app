import React,{useState} from 'react'


export default function App() {
 const [number,setNumber]=useState(0)
 const [result,setResult]=useState(0)


//  handle change
const handlechange=(event)=>{
setNumber(event.target.value)
}

const Add=()=>{   // ADDITION
 let num=parseInt(number)
 let num2=parseInt(result)
  setResult(num+num2)
 
}
const Sub=()=>{  // SUBSTRACTION
  let num=parseInt(number)
  let num2=parseInt(result)
   setResult(num2-num)
  
  

  
  
 }
 //dark mode extra
 const [text,setText]=useState("Enable Dark Mode")
const [darkmode,setDarkmode]=useState({
  backgroundColor:"white",
  color:"black"

})
const darkmodeh=()=>{
  if(darkmode.color==="black"){
    setDarkmode({
      backgroundColor:"black",
      color:"white"
    })
    setText("Enable white Mode")   
  } else{
    setDarkmode({
      backgroundColor:"white",
      color:"black"
    })
  setText("Enable Dark Mode")   
  }
}
  return (
    <div style={darkmode} className='card  mb-3 w-50 p-3 mx-5' >
      <button onClick={darkmodeh} type="button" class="btn btn-dark my-3 mx-3" >
 {text}
</button>
    <h2> Enter a value </h2>
    <input onChange={handlechange} type='number' className="form-control" rows="4" value={number}  placeholder='Enter your value'></input>
       <div >
       
       <button onClick={Add} type="button"  className="btn btn-primary my-3  form-control" >Add</button>
       <button onClick={Sub} type="button" className="btn btn-success form-control">Sub</button>
    
     <h4>result:</h4>
      <input type='number'className="form-control" rows="4"  disabled value={result}></input>
    
        </div>
      
     
    </div>
          
        )
}
 