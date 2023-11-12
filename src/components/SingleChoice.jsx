import React, { useState } from 'react'
import SideBar from './SideBar'
import "../styles/SingleChoice.css"

const SingleChoice = ({ques,data}) => {
  const [res,setRes]=useState(ques.userAns);
  const [correct,setCorrect]=useState(ques.correctAns==ques.userAns)
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
      <div>
        {ques.options.map((ele,index)=>{
          return (
            <div key={index} className='single-option'>
              <input type="radio" name="option" id={ele} checked={ele===res} value={ele} onChange={(e)=>setRes(e.target.value)}/>
              <label htmlFor={ele}>{ele}</label>
            </div>
          )
        })}
      </div>
      </div>
      <div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data} checkAns={checkAns}/>
      </div>
    </>
  )
}

export default SingleChoice