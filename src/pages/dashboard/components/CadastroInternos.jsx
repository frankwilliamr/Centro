import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import CustomizedCadastroInternos from './CustomizedCadastroInternos';




export default function CadastroInternos() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2, marginTop:'20px' }}>
        Cadastro de Internos
      </Typography>
     
      
      
      <CustomizedCadastroInternos />
          
        
        
      
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
