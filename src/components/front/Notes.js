import React from "react";
import Note from "./Note";


function Notes({noteList}) {
  console.log(noteList)
    return (
      <div className="notes-сontainer">
        {noteList?.map(step => (<Note key={step.id} id ={step.id} content={step.content}/>))}
      </div>
    );
  }
  
  export default Notes;