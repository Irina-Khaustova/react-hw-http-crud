import React from "react";

function Form({form, onhandleChange, onHandleAdd}) {
  
    return (
      <div className="form-сontainer">
        <h3 className="new-note-header">New Note</h3>
          <textarea className="form-textarea" value={form.value} onChange={onhandleChange}></textarea>
          <button onClick={onHandleAdd}>Add</button>
      </div>
    );
  }
  
  export default Form;