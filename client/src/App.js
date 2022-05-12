import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound"


function App() {
  return <div>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Detail/:id" element={<Detail/>}/>
      <Route exact path="/Create" element={<Create/>}/>
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
  </div>
}

export default App;
