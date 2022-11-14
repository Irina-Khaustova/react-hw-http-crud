import React from "react";
import {useEffect, useState} from "react"
import './App.css';
import Notes from "./components/front/Notes";
import Form from "./components/front/Form";
import {nanoid} from 'nanoid';


function App() {
  
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    value: ''
  })

  useEffect (() => {
   fetch('http://localhost:9999/notes')
      .then(response => response.json())
      .then((getNotes) => {
        setNotes(getNotes);
        console.log(getNotes);
      })
  },[])

  const handleChange = function(evt) {
    const formValue = evt.target.value;
    setForm(prevForm => ({...prevForm, value: formValue}))
  }

  const handleAdd = function() {
    const newNote = {
      id: `${nanoid()}`,
      content: form.value
  }

  console.log(form.value)

  console.log(JSON.stringify(newNote))

  notes.push(newNote)
  
  setNotes(notes)
  console.log(notes)


  fetch('http://localhost:9999/notes', {
    method: 'POST',
    body: JSON.stringify(newNote)
  })
  .then((responce) => console.log(responce))

  setForm({
    value: ''
  })
  }

  console.log(notes)

  return (
    <div className="App">
      <Notes className="notes" noteList={notes}/>
      <Form className="form" form={form} onhandleChange={handleChange} onHandleAdd={handleAdd}/>
    </div>
  );
}

export default App;
