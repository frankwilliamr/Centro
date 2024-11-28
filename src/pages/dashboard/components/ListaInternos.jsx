import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import CustomizedDataGrid from './CustomizedDataGrid';




export default function ListaInternos() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2, marginTop:'20px' }}>
        Prontuarios
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ margin: '0 auto' }}
      >
              
      </Grid>
      
      <Grid container  columns={12}>
        <Grid size={{ md: 12, lg: 12, xs: 12 }}>
          <CustomizedDataGrid />
        </Grid>
        
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
