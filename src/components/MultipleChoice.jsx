import React, { useState } from 'react'
import SideBar from './SideBar'
import "../styles/MultipleChoice.css"

const MultipleChoice = ({ques,data}) => {
  const [res,setRes]=useState(ques.userAns);

  const addAnswer =(res,data)=>{
    ques.userAns=res;
    localStorage.setItem(JSON.stringify("data"), data);
  }
  const checkAns=()=>{
    
  }

  const handleChange=(value)=>{
    setRes((prevRes) => {
      if (prevRes.includes(value)) {
        return prevRes.filter((item) => item !== value); // Uncheck: Remove from the array
      } else {
        return [...prevRes, value]; // Check: Add to the array
      }
    });
    localStorage.setItem(JSON.stringify("data"), data);
  }
  return (
    <>
      <div>
      <h2>{ques.question}</h2>
      <div>
        {
          ques.options.map((ele,index)=>{
            return (
              <div className='single-option' key={index}>
                <input type="checkbox" value={ele} checked={res.includes(ele)} name={ele} id={index} onChange={()=>handleChange(ele)}/>
                <label htmlFor={index}>{ele}</label>
              </div>
            )
          })
        }
      </div>
      </div>
      <div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data} checkAns={checkAns}/>
      </div>
      </>
  )
}

export default MultipleChoice