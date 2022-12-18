import './App.css';
import Title from './Pages/Title.js';
import React,{useEffect, useContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Parse from './Parse';
import Login from './Pages/Login'
//import {AuthContext, FirebaseContext} from './store/Context'
function App() {
  
  return (
    
    <div>
        <Title/>
      <BrowserRouter>
      <Routes>
        
      <Route exact path='/' element={<Login />}></Route>
      <Route exact path='/parse' element={<Parse />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
