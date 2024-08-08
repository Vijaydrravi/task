// src/App.jsx
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashBoard from './components/UserDashBoard';

const App = () => {
  return (
    <>
    <UserDashBoard></UserDashBoard>
    {/* <AdminDashboard></AdminDashboard> */}
    </>
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <PrivateRoute path='/admin/*' element={<AdminDashboard />} />
    //     {/* Redirect or public routes go here */}
    //     <Route path='/' element={<Navigate to='/login' />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
