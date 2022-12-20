import React from "react";
import Note from "./Note";


function Notes({noteList, onHandleDelete, onHandleUpdate}) {
    return (
      <>
      <div className="notes-header-container">
        <div className="notes-header">NOTES</div>
      <button className="button-update" onClick={onHandleUpdate}>Обновить</button>
      </div>
      <div className="notes-сontainer">
        {noteList?.map(step => (<Note key={step.id}  id={step.id} content={step.text} onDelete={onHandleDelete} />))}
      </div>
      </>
    );
  }
  
  export default Notes;