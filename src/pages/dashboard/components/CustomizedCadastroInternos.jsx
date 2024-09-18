import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function CostumizedCadastroInternos() {
  return (
    <Box
      component="form"
      sx={{  marginTop: '20px',  width: '100%', maxWidth: '100%' }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}  >
      <Grid item xs={12} sm={6} >
        <TextField
          sx={{ width: '80ch' }}
          required
          id="filled-required"
          label="Nome"
          variant="filled"
          
        />
      </Grid>
      <Grid item xs={12} sm={6} >
        <TextField
          sx={{ width: '50ch' }}
          required
          id="filled-required"
          label="Nome"
          variant="filled"
          
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          type='date'
          id="filled-required"
          label= "Data de nascimento"
          variant="filled"
          InputLabelProps={{
            shrink: true, // Faz com que o label seja retraído para cima do campo
          }}
          fullWidth
          
        />
      </Grid>
     
      
     
      </Grid>
    </Box>
  );
}