import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./view/components/navbar";
import Login from "./view/pages/login";
import Catalog from "./view/pages/catalog";
import { AuthContext } from './Providers/auth_provider';
import Perfil from './view/pages/perfil';

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path='/' element={isLoggedIn ? <Catalog /> : <Navigate to="/login" />} />
        <Route path='/perfil' element={isLoggedIn ? <Perfil /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;