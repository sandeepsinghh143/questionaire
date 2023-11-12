import React, { useState } from 'react'
import SideBar from './SideBar'
import "../styles/FillBlank.css"

const FillBlank = ({ques,data}) => {
  const [res,setRes]=useState(ques.userAns);

  const handleChange=(e,index)=>{
    const updatedRes = [...res];
    updatedRes[index] = e.target.value;
    setRes(updatedRes);
    localStorage.setItem(JSON.stringify("data"), data);
  }
  const addAnswer =(res)=>{
    ques.userAns=res;
    localStorage.setItem(JSON.stringify("data"), data);
  }
  const checkAns=()=>{
    
  }

  return (
    <>
      <div>
        <h2>{ques.question}</h2>
        <p style={{margin:"20px 0px"}}>Answer</p>
        <p className='flex-pattern'>
          {ques.answerPattern.split(" ").map((ele,index)=>{
            if(ele=="_"){
              return (
              <span key={index}>
                <input type="text" name="" id="" value={res[index]} onChange={(e) => handleChange(e, index)}/>
              </span>
              )
            } 
            else{
              return (
                <span key={index}>{ele}</span>
              )
            }
          })}
        </p>
      </div>
      <div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data} checkAns={checkAns}/>
      </div>
    </>
  )
}

export default FillBlank