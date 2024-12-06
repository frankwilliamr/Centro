import React, { useState } from 'react';
import { Box, Card, TextField, MenuItem, Button, Select, Grid2, Typography, Divider } from '@mui/material';


export default function CadastroUsuarios(){
  


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
              />
            </Grid2>
           
            <Grid2 xs={12} sm={6}>
            <Select
          sx={{ width: '20ch', mb: 5, mt: 2}}
          
        
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
          <Button type="submit" variant="contained" size="large" color="primary">
            Cadastrar
          </Button>
          </Grid2>
      </Card>
    </Box>
  );
};


