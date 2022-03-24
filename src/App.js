import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home token={token} />} />
        <Route exact path="/home" element={<Home token={token} />} />
        <Route exact path="/login" element={<Login setToken={setToken} />} />
        <Route exact path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
