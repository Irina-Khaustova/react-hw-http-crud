import React from "react";

function Note({id, content}) {
  
    return (
      <div className="note-сontainer" id={id}>
        <div className="note-header">
          <div>{content}</div>
        </div>
      </div>
    );
  }
  
  export default Note;