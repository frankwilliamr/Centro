import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import DadosPessoais from './DadosPessoais';
import CadastroEndereco from './CadastroEndereco';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import DadosSociais from './DadosSociais';
import VinculosSociais from './VinculosSociais';
import Divider from '@mui/material/Divider';
import { Card } from '@mui/material';
import axios from 'axios';

export default function CadastroInternos() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  const [dadosPessoais, setDadosPessoais] = React.useState({});
  const [dadosEndereco, setDadosEndereco] = React.useState({}); 
  const [dadosSociais, setDadosSociais] = React.useState({})
  const timer = React.useRef(null);

  const handleSubmit = async () => {
    if (loading) return; // Evita múltiplos envios enquanto está carregando

    setSuccess(false);
    setLoading(true);

    try {
      // Unindo os dados de diferentes componentes
      const dadosParaEnvio = {
        ...dadosPessoais,
        ...dadosEndereco,
        ...dadosSociais,
      };

      // Enviando os dados via axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dadosParaEnvio);
      console.log('Dados enviados com sucesso:', response.data);
      
      // Se os dados forem enviados com sucesso, define success como true
      timer.current = setTimeout(() => {
        setSuccess(true);
      }, 2000);
      
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    } finally {
      // Após 2 segundos, retorna ao estado inicial
      timer.current = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  // Função callback que vai receber os dados do componente filho
  const receberDadosPessoais = (dados) => {
    setDadosPessoais(dados);
  };
  const receberDadosEndereco = (dados) => {
    setDadosEndereco(dados);
  };
  const receberDadosSociais = (dados) => {
    setDadosSociais(dados);
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };


  
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
      {/* cards */}
      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Dados Pessoais
        <Divider />
      </Typography>
      
      <DadosPessoais onChange={receberDadosPessoais}/>
      </Card>

      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{  mb: 3 }}>
        Endereço
        <Divider />
      </Typography>

      <CadastroEndereco onChange={receberDadosEndereco}/>
      </Card>
      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
        Dados Socio-Demograficos
        <Divider/>
      </Typography>

        <DadosSociais onChange={receberDadosSociais} />
      </Card>

      <Card sx={{ mb: 2, marginTop:'20px' }}>
        <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
        Vinculos Sociais
        <Divider />
      </Typography>

      <VinculosSociais/>
      </Card>
      
    <Box sx={{ m: 4, position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Box sx={{position: 'relative'}}>
        <Fab
          
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleSubmit}
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
