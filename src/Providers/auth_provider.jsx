import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken')); // Estado de autenticación

  const [authToken, setAuthToken] = useState(null); // Token de autenticación

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token, userData) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token); // Almacenar el token en el almacenamiento local
    setIsLoggedIn(true);
    setUserData(userData);
};

useEffect(() => {
    if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log(localStorage.getItem('userData'));
    }
}, [userData]);

  // Función para cerrar sesión
  const logout = () => {
    setAuthToken(null);
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('authToken'); // Eliminar el token del almacenamiento local al cerrar sesión
    localStorage.removeItem('userData'); // Eliminar los datos del usuario del almacenamiento local
  };

  // Función para establecer los datos del usuario
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData)); // Actualizar los datos del usuario en el almacenamiento local
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, updateUserData, isLoggedIn, login, logout, authToken, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };