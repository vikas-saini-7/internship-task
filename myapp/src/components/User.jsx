import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    function submitForm(e) {
        e.preventDefault();
        console.log(email, name, username, age, password);
        alert("Hey "+ name+ " Data sent successfully");
        navigate('/dashboard');
    }

  return (
    <div>
        <form onSubmit={submitForm}  >
            <input type="text" placeholder='email' onChange={(e) => {setEmail(e.target.value)}} required />
            <input type="text" placeholder='name' onChange={(e) => {setName(e.target.value)}} required/>
            <input type="text" placeholder='username' onChange={(e) => {setUsername(e.target.value)}} required/>
            <input type="number" placeholder='age' onChange={(e) => {setAge(e.target.value)}} required/>
            <input type="text" placeholder='password' onChange={(e) => {setPassword(e.target.value)}} required/>
            <input type="submit" value="Submit Form" />
        </form>
    </div>
  )
}

export default User