import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import UserList from './pages/UserList';
import LoginPage from './pages/LoginPage';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coup-de-coeur' element={<UserList />} />
        <Route path='/connexion' element={<LoginPage />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;