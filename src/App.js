import React, { useState } from 'react';
import Form from './Components/Form.js';
import './App.css';

function App() { 
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role: ''});

 const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }

  return (
    <div>
      <h1>Team Builder App</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {members.map(member => {
        return (
          <div>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
