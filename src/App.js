import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Index from './Component/Index';
import Table from './Component/Table';
import axios from 'axios';
import Home from './Component/Home';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Forget from './Component/Forget';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/input' element={<Index/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetpass' element={<Forget/>}/>
      </Routes>
    </div>
  );
}

export default App;
