import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import DadosPessoais from './DadosPessoais';
import CadastroEndereco from './CadastroEndereco';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';





export default function CadastroInternos() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  // const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2, marginTop:'20px' }}>
        Dados Pessoais
      </Typography>
     
      <DadosPessoais/>

      <Typography component="h2" variant="h6" sx={{ mb: 2, marginTop:'20px' }}>
        Endereço
      </Typography>

      <CadastroEndereco/>



    <Box sx={{ m: 4, position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Box sx={{position: 'relative'}}>
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
    </Box>
      
      <Copyright sx={{ my: 4}} />
    </Box>
  );
}
