import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Grid2, Typography, Paper, Box, Card, TextField, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import AppNavbar from './components/AppNavbar';
import SideMenu from './components/SideMenu';


export default function Paciente(){
  
  const [dados, setDados] = useState([]);
  const [editando, setEditando] = useState(false); 
  const [editedTitle, setEditedTitle] = useState(''); 
  
  

  useEffect(() => {
    
    axios.get("https://jsonplaceholder.typicode.com/posts?id=1")
        
      .then(response => {
        setDados(response.data.find(id => id.id === 1)); 
        setEditedTitle(dados.title)
        
        
      })
      
      .catch(error => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);
  
  const handleEditar = () => {
    
    setEditando(true); 
  };
  
  const handleSalvar = () => {
    console.log(editedTitle)
    axios.put("https://jsonplaceholder.typicode.com//posts/1", {
      title: editedTitle, 
    })
    .then((response) => {
      console.log("Dados salvos:", response.data);
      setEditando(false); 
      
   
    })
    .catch((error) => {
      console.error("Erro ao salvar os dados:", error);
    });
};
    
  
  
  const handleCancelar = () => {
    setEditando(false); 
  };
  return(
    
    <Box sx={{ ml: 2, display: 'flex' }}>
          <SideMenu />
          <AppNavbar />

      
      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Dados Pessoais
        <Divider />
      </Typography>
      
      <Grid2 item xs={12} sm={6}>
              {!editando ? (
                <Button variant="contained" color="primary" onClick={handleEditar}>
                  Editar
                </Button>
              ) : (
                <>
                  <Button variant="contained" color="primary" onClick={handleSalvar}>
                    Salvar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 2 }}
                    onClick={handleCancelar}
                  >
                    Cancelar
                  </Button>
                </>
              )}
            </Grid2>
      <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
      <Grid2 item xs={12} sm={6}>
          <Box>
          <TextField
                fullWidth
                label="CPF"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                InputProps={{
                  readOnly: !editando,
                }}
                variant="outlined"
              />
          </Box>
        </Grid2>
        </Grid2>
      </Card>
      
    </Box>
    

  );
}