import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../../../firebase'; // Certifique-se de importar o auth configurado
import { setPersistence, browserLocalPersistence, onAuthStateChanged  } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';

const AuthContext = createContext();

const fetchUserCargo = async (userId) => {
  const userDocRef = doc(db, 'usuarios', userId);  // A coleção 'usuarios' contém documentos com o ID do usuário
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    return {
      cargo: userData.cargo,   // Retorna o cargo
      nome: userData.nome,     // Retorna o nome
      email: userData.email,   // Retorna o email
    }; // Retorna o cargo do usuário
  } else {
    console.log('Usuário não encontrado no Firestore');
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState(null);    // Estado para armazenar o nome
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Define a função de inicialização
    const initAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        console.log("✅ Persistência configurada para local");
  
        onAuthStateChanged(auth, async (user) => {
          console.log("👤 onAuthStateChanged =>", user);
          if (user) {
            setCurrentUser(user);
            const userData = await fetchUserCargo(user.uid);
            setCargo(userData?.cargo || null);
            setNome(userData?.nome || null);
            setEmail(userData?.email || null);
          } else {
            setCurrentUser(null);
            setCargo(null);
            setNome(null);
            setEmail(null);
          }
          setLoading(false);
        });
      } catch (error) {
        console.error("❌ Erro ao configurar persistência:", error.message);
        setLoading(false);
      }
    };
  
    // Chama a função de inicialização
    initAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, cargo, nome, email, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
