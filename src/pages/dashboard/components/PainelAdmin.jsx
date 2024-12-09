import * as React from 'react';
import { useState } from 'react';
import { db } from '../../../../firebase';
import { getDocs, doc, collection } from 'firebase/firestore';
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
  import DeleteIcon from '@mui/icons-material/Delete';

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
              <TableCell>Excluir</TableCell>
            </TableRow>
            
          </TableHead>
          
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.cargo}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={usuario.ativo}
                    onChange={() => handleCheckboxChange(usuario.id)}
                  />
                </TableCell>
                <TableCell><DeleteIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      </Box>
      )
        
        
      
    
}