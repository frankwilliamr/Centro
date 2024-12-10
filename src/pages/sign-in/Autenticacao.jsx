import React, { createContext, useContext, useState, useEffect } from 'react';
import { browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase'; // Certifique-se de importar o auth configurado
import { setPersistence } from 'firebase/auth';
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      const fetchCargo = async () => {  // Definindo uma função assíncrona dentro do useEffect
        if (user) {
          setCurrentUser(user);
          const userData = await fetchUserCargo(user.uid);  // Espera a Promise ser resolvida
           setCargo(userData.cargo);   // Atualiza o estado com o cargo do usuário
            setNome(userData.nome);     // Atualiza o estado com o nome do usuário
            setEmail(userData.email);   // Atualiza o estado com o cargo do usuário
        } else {
          setCurrentUser(null);
          setCargo(null);
          setNome(null);
          setEmail(null);
        }

        setLoading(false);  // Finaliza o carregamento
      };

      fetchCargo();  // Chama a função assíncrona dentro do useEffect

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
    <AuthContext.Provider value={{ currentUser, cargo, nome, email, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
