import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      {/* <Route path='/' element={}></Route> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;