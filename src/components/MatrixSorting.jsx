import React, { useState } from "react";
import SideBar from "./SideBar";
import "../styles/MatrixSorting.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const MatrixSorting = ({ ques,data }) => {
  const [res, setRes] = useState(ques.answerOptions);
  const [res2,setRes2]=useState(ques.userAns);
  const onDragEnd = (result) => {
    console.log(result);
    const {source, destination}=result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    let add,
    active =res,
    complete=res2;
    if(source.droppableId==="drop1"){
      add=active[source.index];
      active.splice(source.index,1);
  }else{
     add=complete[source.index];
      complete.splice(source.index,1);
  }
  if(destination.droppableId==="drop1"){
    active.splice(destination.index,0,add);
}else{
    complete.splice(destination.index,0,add);
}
setRes2(complete);
setRes(active);
localStorage.setItem(JSON.stringify("data"), data);
}

  const addAnswer = () => {
    ques.userAns = res;
    ques.userAns=res2;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div>
          <h2>{ques.question}</h2>
          <Droppable droppableId="drop1">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="answer-options"
              >
                {res.map((ans, index) => {
                  return (
                    <Draggable
                      draggableId={(index + "s").toString()}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <span
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {ans}
                        </span>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="options">
            <div className="images">
              {ques.options.map((img, index) => {
                return (
                  <div key={index}>
                    <img src={img} alt="image-option" width={"80px"} />
                  </div>
                );
              })}
            </div>
            {/* outer................................ */}
            <div className="ans">
              <Droppable droppableId="drop2">
                {(provided) => (
                  // inner...........................
                  <div
                  className="drop-here"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                   {
                    res2.map((ele,index)=>{
                      return (
                        // third......................
                        <div className="results" key={index}>{ele}</div>
                      )
                    })
                  } 
                  {provided.placeholder}
                </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data}/>
      </div>
    </DragDropContext>
  );
};

export default MatrixSorting;
