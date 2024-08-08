import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import UserDashBoard from './components/UserDashBoard';

const App = () => {
  const [token, setToken] = useState('');
  
  return (

    <>

      {/* <UserDashBoard></UserDashBoard> */}
      <h1>He</h1>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login setToken={setToken} />} />
    //     <Route path="/dashboard" element={token ? <AdminDashboard token={token} /> : <Login setToken={setToken} />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
