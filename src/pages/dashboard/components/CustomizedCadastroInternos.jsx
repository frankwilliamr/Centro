import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Grid from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TesteJoao from './teste';


export default function CostumizedCadastroInternos() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [Parentesco, setParentesco] = React.useState('');

  const handleChange = (event) => {
    setParentesco(event.target.value);
  };

  
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };


  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Box
      component="form"
      sx={{  marginTop: '20px',  width: '100%', maxWidth: '100%' }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
      <Grid item  xs={12} sm={6} md={4} lg={3}>
      
        <TextField
          sx={{ width: '80ch' }}
          required
          id="Nome"
          label="Nome Completo"
          variant="standard"
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          id="CPF"
          label="CPF"
          variant="standard"
          type='text'
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          required
          type='date'
          id="nascimento"
          label= "Data de nascimento"
          variant="standard"
          InputLabelProps={{
            shrink: true, // Faz com que o label seja retraído para cima do campo
          }}
          fullWidth
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      
        <TextField
        sx={{ width: '30ch' }}
        required
        type='text'
        id='RG'
        label='RG'
        variant="standard"
        fullWidth
        /> 
          

      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
      
       
        <TextField
          sx={{ width: '80ch' }}
          required
          id="Responsavel"
          label="Responsavel"
          variant="standard"
          fullWidth
          
        /> 
      </Grid>
      <Grid item xs={12} sm={6} lg={3} >
      <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}
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
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          id="Celular"
          label="Contato"
          variant="standard"
          
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '80ch' }}
          required
          id="mae"
          label="Nome da Mãe"
          variant="standard"
          
        />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '80ch' }}
          required
          id="pai"
          label="Nome do Pai"
          variant="standard"
          
        />
      </Grid>

      

       
      
      <Box sx={{ position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      
     
      </Grid>
    </Box>
  );
}