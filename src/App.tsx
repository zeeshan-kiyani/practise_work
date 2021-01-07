import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import UserGrid from './components/UserGrid'
import UserForm from './components/UserForm'
function App() {
  return (
    <div className="App">
      <h2>Change component</h2>
      <Footer comp = { `App`}/>
      <h2>User Data</h2>
      <UserGrid/>
      <h2>User Form</h2>
      <UserForm/>
    </div>
  );
}

export default App;
