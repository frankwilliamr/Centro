import React, { createContext, useContext, useState, useEffect } from 'react';
import { browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase'; // Certifique-se de importar o auth configurado
import { setPersistence } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistência configurada para local");
  })
  .catch((error) => {
    console.error("Erro ao configurar persistência:", error.message);
  });
  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
