import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import UserDashBoard from './components/UserDashBoard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/" element={<Login />} />  
      </Routes>
    </Router>
  );
};

export default App;
