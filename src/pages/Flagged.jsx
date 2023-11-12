import React from 'react'
import FreeChoice from "../components/FreeChoice"
import "../styles/Lesson.css"
import FillBlank from '../components/FillBlank'
import MatrixSorting from "../components/MatrixSorting"
import Sorting from '../components/Sorting'
import SingleChoice from '../components/SingleChoice'
import MultipleChoice from '../components/MultipleChoice'

const Flagged = ({dataLesson}) => {
    const data=dataLesson.filter((ele)=>ele.flag===true);
  return (
    <>
      {
        data.map((ques,index)=>{
          switch(ques.questionType){
            case "free choice":
              return <div className='flex' key={index}><FreeChoice ques={ques} data={data}/></div>;
            case "fill blank":
              return <div className='flex' key={index}><FillBlank ques={ques} data={data}/></div>;
            case "matrix sorting":
              return <div className='flex' key={index}><MatrixSorting ques={ques} data={data}/></div>;
            case "Sorting":
              return <div className='flex' key={index}><Sorting ques={ques} data={data}/></div>;
            case "single choice":
              return <div className='flex' key={index}><SingleChoice ques={ques} data={data}/></div>;
            case "multiple choice":
              return <div className='flex' key={index}><MultipleChoice ques={ques} data={data}/></div>;
            default:
              return;
          }
        })
      }
    </>
  )
}

export default Flagged