import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import User from './components/User';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users/3')
  //   .then(user => {
  //     setUser(user.data)
  //   });
  // }, [])

  return (
    <div className="App">
      {/* <p>Hello World</p>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.name}</p> */}

    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



// 1. Display the text "Hello, world!".
// 2. Establish a new page titled "User" and retrieve information from the specified URL: https://jsonplaceholder.typicode.com/users/3 Display the extracted data including the fields for name, username, and email.
// 3. Develop two separate pages labeled "User" and "Dashboard". Implement a form within the "User" page to capture user details such as email, name, username, age, and password. Upon submission, redirect to the "Dashboard" where user data (excluding the password) will be presented.