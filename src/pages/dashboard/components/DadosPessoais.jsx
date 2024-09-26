import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid2 from '@mui/material/Grid2';





export default function DadosPessoais() {
  
  const [Parentesco, setParentesco] = React.useState('');

  const handleChange = (event) => {
    setParentesco(event.target.value);
  };

  
  
  return (
    
      
      <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
      <Grid2 item  xs={12} sm={6} md={4} lg={3}>
      
        <TextField
          sx={{  width: '50ch', paddingTop: '10px' }}
          required
          id="outlined-required"
          label="Nome Completo"
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="CPF"
          label="CPF"
          
          type='text'
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{  paddingTop: '10px' }}
          required
          type='date'
          id="nascimento"
          label= "Data de nascimento"
          
          InputLabelProps={{
            shrink: true, // Faz com que o label seja retraído para cima do campo
          }}
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      
        <TextField
        sx={{ width: '20ch', paddingTop: '10px' }}
        required
        type='text'
        id='RG'
        label='RG'
        
        
        /> 
          

      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="Celular"
          label="Contato"
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      
       
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="Responsavel"
          label="Responsavel"
          
          fullWidth
          
        /> 
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <FormControl  variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Parentesco</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pai</MenuItem>
          <MenuItem value={20}>Mãe</MenuItem>
          <MenuItem value={30}>Avô/Avó</MenuItem>
        </Select>
      </FormControl>
      </Grid2>

      

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="sexo" shrink sx={{ fontSize: '1.2rem' }}>Sexo</InputLabel>
        
        <Select
          
          labelId="sexo"
          id="sexo"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Masculino</MenuItem>
          <MenuItem value={20}>Feminino</MenuItem>
          
        </Select>
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch' , paddingTop: '10px'}}
          required
          id="mae"
          label="Nome da Mãe"
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="pai"
          label="Nome do Pai"
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <FormControl  variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Nacionalidade</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Brasileiro(a)</MenuItem>
          <MenuItem value={20}>Argentino</MenuItem>
          <MenuItem value={30}>Venezuelano</MenuItem>
        </Select>
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="naturalidade"
          label="Naturalidade"
          
          
        />
      </Grid2>

      </Grid2>
      
  );
}