import React,{useState} from 'react'
import {BsBookmark} from "react-icons/bs"
import "../styles/Sidebar.css"

const SideBar = ({addAnswer,res,ques,data,checkAns}) => {
    const [attempts,setAttempts]=useState(ques.attempts);
    const [flag,setFlag]=useState(ques.flag);
    const handleAttempts=()=>{
        checkAns();
        addAnswer(res);
        setAttempts(attempts-1);
        ques.attempts=attempts;
        localStorage.setItem(JSON.stringify("data"), data);
    }
    const handleFlag=()=>{
        setFlag(!flag);
        ques.flag=flag;
        localStorage.setItem(JSON.stringify("data"), data);
    }
  return (
    <div className='sidebar'>
        <div className='flag' onClick={handleFlag}><BsBookmark className={flag && "flagged"}/>{flag?"Flagged":"Flag for Later"}</div>
        <div>
            <button onClick={handleAttempts} disabled={attempts===0} className='check-btn'>Check</button>
            <p className='chance'>{attempts} attempts left</p>
        </div>
    </div>
  )
}

export default SideBar