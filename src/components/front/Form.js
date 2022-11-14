import React from "react";

function Form({form, onhandleChange, onHandleAdd}) {
  
    return (
      <div className="form-сontainer">
        <h2 className="note-header">New Note</h2>
          <input className="form-input" value={form.value} onChange={onhandleChange}></input>
          <p onClick={onHandleAdd}>Add</p>
      </div>
    );
  }
  
  export default Form;