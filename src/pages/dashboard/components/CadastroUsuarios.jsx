import React, { useState } from 'react';
import { Box, Card, TextField, MenuItem, Button, Select, Grid2, Typography, Divider } from '@mui/material';
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { db } from '../../../../firebase';




export default function CadastroUsuarios(){
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [cargo, setCargo] = React.useState('')
  
  

  
  async function handleAdicionarUsuario() {
    if (!nome || !email || !cargo) {
      alert('Todos os campos precisam ser preenchidos!');
      return;
    }

    
      await adicionarUsuario(nome, email, cargo);
      
    }

    
  async function adicionarUsuario(nome, email, cargo) {
    try {
      // 1️⃣ Gera uma senha aleatória
      const senha = gerarSenhaAleatoria();
  
      // 2️⃣ Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;
      
      // 3️⃣ Salva o usuário no Firestore
      const dadosParaEnvio = { 
        nome: nome,
        email: email, 
        cargo: cargo,
        userId: userId, 
        dataCriacao: new Date() 
      };
  
      const docRef = await addDoc(collection(db, 'usuarios'), dadosParaEnvio);
  
      console.log('Usuário adicionado com sucesso. ID do documento:', docRef.id);
  
      // 4️⃣ Envia a senha para o e-mail do usuário
      await enviarEmail(email, senha);

      alert('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setCargo('');
      window.close();
      return { sucesso: true, userId, docId: docRef.id };
  
    } catch (erro) {
      console.error('Erro ao adicionar o usuário:', erro);

    if (erro.code === 'auth/email-already-in-use') {
      alert('Este e-mail já está cadastrado!');
    } else if (erro.code === 'auth/invalid-email') {
      alert('O e-mail fornecido é inválido!');
    }else {
      alert('Erro ao cadastrar o usuário.');
    }

    return { sucesso: false, erro };
    }
  }
  
  function gerarSenhaAleatoria(tamanho = 10) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
  }

  async function enviarEmail(email, senha) {
    try {
      const response = await axios.post('http://localhost:3000/sendEmail', {
        email,
        senha,
      });
      console.log('E-mail enviado com sucesso:', response.data);
    } catch (erro) {
      console.error('Erro ao enviar o e-mail:', erro);
    }
  }


  return (
    <Box sx={{ ml: 2, display: 'flex', mt: 4, justifyContent: 'center' }}>
      <Card sx={{ mb: 2, padding: 3, width: '100%', maxWidth: 500 }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Cadastro de usuario 
        
       </Typography>
       <Divider/>
          <Grid2 container spacing={2} justifyContent="space-between"  sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', mt: 3 }}>
            {/* Campo de Nome */}
            <Grid2 xs={12} sm={6}>
              <TextField
                label="Nome"
                fullWidth
                name="nome"
                required
                onChange={(e) => setNome(e.target.value)}
                
              />
            </Grid2>
            {/* Campo de Email */}
            <Grid2 xs={12} sm={6}>
              <TextField
              
                label="E-mail"
                fullWidth
                name="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid2>
           
            <Grid2 xs={12} sm={6}>
            <Select
          sx={{ width: '20ch', mb: 5, mt: 2}}
          onChange={(e) => setCargo(e.target.value)}
        
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value='Assistente Social'  >Assistente Social</MenuItem>
          <MenuItem value='Cuidador'>Cuidador</MenuItem>
          <MenuItem value='Autonomo'>Autonomo</MenuItem>
          
            </Select>
            </Grid2>
          </Grid2>
          <Grid2 xs={12} sm={6} display='flex' justifyContent='center'>
          <Button type="submit" variant="contained" size="large" color="primary" onClick={handleAdicionarUsuario}>
            Cadastrar
          </Button>
          </Grid2>
      </Card>
    </Box>
  );
};


