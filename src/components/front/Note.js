import React from "react";

function Note({id, content, onDelete}) {
  
    return (
      <div className="note-сontainer" id={id}>
        <button className="note-close" onClick={() => onDelete(id)}>Х</button>
        <div className="note-header">
          <p className="note-content">{content}</p>
        </div>
      </div>
    );
  }
  
  export default Note;