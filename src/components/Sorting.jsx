import React, { useState } from "react";
import SideBar from "./SideBar";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../styles/Sorting.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Sorting = ({ ques,data }) => {
  const [res,setRes]=useState(ques.userAns);

  const onDragEnd =(result)=>{
    const {source, destination}=result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    if(source.droppableId==="ques-list"){
      const reorder=[...res];
      const [removed]=reorder.splice(source.index,1);
      reorder.splice(destination.index,0,removed);
      setRes(reorder)
    }
    localStorage.setItem(JSON.stringify("data"), data);
  }
  const addAnswer=()=>{
    ques.userAns=res;
    localStorage.setItem(JSON.stringify("data"), data);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="ques-list">
        {(provided) => (
          <div ref={provided.innerRef}
          {...provided.droppableProps}>
            <h2>{ques.question}</h2>
            <div>
              {res.map((ele, index) => {
                return (
                  <Draggable draggableId={(index).toString()} index={index} key={index}>
                    {(provided,snapshot)=>(
                      <div className={`sort-options ${snapshot.isDragging ? "drag": ""}`}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>
                      <span>{ele}</span>
                      <span>
                        <BsThreeDotsVertical />
                      </span>
                    </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
            {/* stops droppable from shrinking and going content outside the droppable */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div>
        <SideBar addAnswer={addAnswer} res={res} ques={ques} data={data}/>
      </div>
    </DragDropContext>
  );
};

export default Sorting;
