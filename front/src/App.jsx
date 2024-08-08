// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard'; // Assuming you have a UserDashboard component

const App = () => (
  <Router>
    <Routes>
      <Route path='admin/*' element={<AdminDashboard />} />
      <Route path='user/*' element={<UserDashboard />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);

export default App;
