import * as React from 'react';
import { useState } from 'react';
import { db } from '../../../../firebase';
import { getDocs, doc, collection, updateDoc } from 'firebase/firestore';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    Divider,
    Card,
    Box, 
    Grid2,
    Typography,
    IconButton
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  

export default function painelAdmin(){
    
  const [usuarios, setUsuarios] = useState([]);
      
  const fetchDados = async () => {
    try {
      const collectionRef = collection(db, "usuarios");
      const querySnapshot = await getDocs(collectionRef);

      if (!querySnapshot.empty) {
        const usuariosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsuarios(usuariosData);
      } else {
        console.log("Nenhum documento encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };
      const handleAdd = () =>{
        window.open(`/cadastroUsuario`, '_blank', 'width=800,height=600');
      }
      React.useEffect(() => {
        fetchDados()
      })

      const handleCheckboxChange = async (id) => {
        try {
          // Atualiza o estado local (opcional, mas melhora a experiência do usuário)
          setUsuarios((prevUsuarios) =>
            prevUsuarios.map((usuario) =>
              usuario.id === id ? { ...usuario, ativo: !usuario.ativo } : usuario
            )
          );
    
          // Identifica o usuário no banco de dados Firebase (Firestore)
          const usuarioRef = doc(db, "usuarios", id);
          
          // Pega o valor atual do ativo para alternar
          const usuarioAtual = usuarios.find(usuario => usuario.id === id);
          const novoValorAtivo = !usuarioAtual.ativo;
    
          // Atualiza o valor "ativo" no banco de dados
          await updateDoc(usuarioRef, { ativo: novoValorAtivo });
    
          console.log(`Usuário foi atualizado com sucesso! `);
        } catch (error) {
          console.error('Erro ao atualizar o usuário no Firebase:', error);
        }
      };
    return(
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
        <Card  sx={{margin: 2}}>
      <Grid2 container sx={{ justifyContent: 'space-between'}}>
      <Grid2 item  xs={12} sm={6}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Usuarios 
        
       </Typography>
        </Grid2>
      <Grid2 sx={{mb: 2, display: 'flex', justifyContent: 'flex-end'}}>
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={handleAdd}
      >
        <AddIcon />
      </IconButton>
      </Grid2>
      </Grid2>
        <TableContainer component={Paper}>
        <Table>
          <TableHead >
            <TableRow >
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Ativo</TableCell>
              
            </TableRow>
            
          </TableHead>
          
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.cargo}</TableCell>
                <TableCell>
                {usuario.cargo !== 'admin' && (
                  <Checkbox
                  checked={usuario.ativo}
                  onChange={() => handleCheckboxChange(usuario.id)}
                  />
          )}
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      </Box>
      )
        
        
      
    
}