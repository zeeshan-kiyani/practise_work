import React from 'react';
import configureStore from './redux/store/index'
import './App.css';
import Footer from './components/Footer'
import UserGrid from './components/UserGrid'
import UserForm from './components/UserForm'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={configureStore()} >
    <div className="App">
      <h2>Change component</h2>
      <Footer comp = { `App`}/>
      <h2>User Data</h2>
      <UserGrid/>
      <h2>User Form</h2>
      <UserForm/>
    </div>
    </Provider>
  );
}

export default App;
