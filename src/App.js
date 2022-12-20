import React from "react";
import {useEffect, useState} from "react"
import './App.css';
import Notes from "./components/front/Notes";
import Form from "./components/front/Form";

function App() {
  
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    value: ''
  })

 function getNotes1() {
    fetch('http://localhost:9999/notes')
    .then(response => response.json())
    .then((getNotes) => {
      setNotes(getNotes);
    })
}

  useEffect (() => {
    getNotes1();
  },[])

  const handleChange = function(evt) {
    const formValue = evt.target.value;
    setForm(prevForm => ({...prevForm, value: formValue}))
  }

  const handleAdd = function() {
    const newNote = form.value
  
    if(newNote) {
  
      fetch('http://localhost:9999/notes', {
        method: 'POST',
        body: JSON.stringify(newNote)
      })

      setForm({
        value: ''
      })
      getNotes1();
    }
  }

  const handleDelete = function(id) {
    fetch(`http://localhost:9999/notes/${id}`, {
    method: 'DELETE',
    })
    
     getNotes1();
  }

  const handleUpdete = function() {
    getNotes1();
  }

  return (
    <div className="App">
      <Notes className="notes" noteList={notes} onHandleDelete={handleDelete} onHandleUpdate={handleUpdete}/>
      <Form className="form" form={form} onhandleChange={handleChange} onHandleAdd={handleAdd}/>
    </div>
  );
}

export default App;
