import React, { useState } from 'react'
import SideBar from './SideBar';
import "../styles/FreeChoice.css"

const FreeChoice = ({ques,data}) => {
  const [res,setRes]=useState(ques.userAns);
  const [correct,setCorrect]=useState(ques.userAns==ques.correctAns);
  const addAnswer =(res)=>{
    ques.userAns=res;
    localStorage.setItem(JSON.stringify("data"), data);
  }
  const checkAns=()=>{
    return correct;
  }
  return (
    <>
       <div>
        <h2>{ques.question}</h2>
        <p style={{margin:"20px 0px"}}>Answer</p>
        <input type="text" name="" id="" value={res} placeholder='Enter your answer' className='free-input' onChange={(e)=>setRes(e.target.value)}/>
       </div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data} checkAns={checkAns}/>
    </>
  )
}

export default FreeChoice;