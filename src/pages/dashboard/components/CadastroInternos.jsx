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

  //Dados Pessoais
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [nascimento, setNascimento] = React.useState('');
  const [rg, setRg] = React.useState('');
  const [contato, setContato] = React.useState('');
  const [responsavel, setResponsavel] = React.useState('');
  const [parentesco, setParentesco] = React.useState('');
  const [contatoResponsavel, setContatoResponsavel] = React.useState('');
  const [sexo, setSexo] = React.useState('');
  const [mae, setMae] = React.useState('');
  const [pai, setPai] = React.useState('');
  const [nacionalidade, setNacionalidade] = React.useState(''); 
  const [naturalidade, setNaturalidade] = React.useState('');

  //Dados Sociais
  const [religiao, setReligiao] = React.useState ('');  
  const [outraReligiao, setOutraReligiao] = React.useState('');
  const [escolaridade, setEscolaridade] = React.useState('');
  const [ocupacao, setOcupacao] = React.useState('');
  const [outraOcupacao, setOutraOcupaccao] = React.useState('');
  const [previdencia, setPrevidencia] = React.useState('');
  const [outraPrevidencia, setOutraPrevidencia] = React.useState('');
  const [beneficios, setBeneficios] = React.useState('');
  const [outrosBeneficios, setOutrosBeneficios] = React.useState('');
  const [moradia, setMoradia] = React.useState('');
  const [outraMoradia, setOutraMoradia] = React.useState('');
  
  //Vinculos Sociais
  
  
  

  const timer = React.useRef(null);

  const handleSubmit = async () => {
    if (loading) return; // Evita múltiplos envios enquanto está carregando

    setSuccess(false);
    setLoading(true);

    try {
      //Dados Sociais - Verificando se a opção outros foi utilizada.
      const religiaoFinal = religiao === 'outro' ? outraReligiao : religiao;
      const ocupacaoFinal = ocupacao === 'outro' ? outraOcupacao : ocupacao;
      const previdenciaFinal = previdencia === 'sim' ? outraPrevidencia : previdencia;
      const beneficiosFinal = beneficios === 'outro' ? outrosBeneficios : beneficios;
      const moradiaFinal = moradia === 'outro' ? outraMoradia : moradia;

      // Unindo os dados de diferentes componentes
      const dadosParaEnvio = {
        //Dados Pessoais
        nome,
        cpf,
        nascimento,
        rg,
        contato,
        responsavel,
        parentesco,
        contatoResponsavel,
        sexo,
        mae,
        pai,
        nacionalidade,
        naturalidade,

        //Dados Sociais
        religiaoFinal,
        escolaridade,
        ocupacaoFinal,
        previdenciaFinal,
        beneficiosFinal,
        moradiaFinal,
        
      };
            
      // Enviando os dados via axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dadosParaEnvio);
      console.log('Dados enviados com sucesso:', response.data);
      
      
      // Se os dados forem enviados com sucesso, define success como true
      setLoading(false);
      setSuccess(true);
      
      
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setLoading(false);
    } 
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
      
      <DadosPessoais 
        nome={nome}
        cpf={cpf}
        nascimento={nascimento}
        rg={rg}
        contato={contato}
        responsavel={responsavel}
        parentesco={parentesco}
        contatoResponsavel={contatoResponsavel}
        sexo={sexo}
        mae={mae}
        pai={pai}
        nacionalidade={nacionalidade}
        naturalidade={naturalidade}
        alterarNome={setNome}
        alterarCpf={setCpf}
        alterarNascimento={setNascimento}
        alterarRg={setRg}
        alterarContato={setContato}
        alterarResponsavel={setResponsavel}
        alterarParentesco={setParentesco}
        alterarSexo={setSexo}
        alterarMae={setMae}
        alterarPai={setPai}
        alterarNacionalidade={setNacionalidade}
        alterarNaturalidade={setNaturalidade}
        alterarContatoResponsavel={setContatoResponsavel}
      />
      </Card>

      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{  mb: 3 }}>
        Endereço
        <Divider />
      </Typography>

      <CadastroEndereco />
      </Card>
      <Card sx={{ mb: 2, marginTop:'20px' }}>
      <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
        Dados Socio-Demograficos
        <Divider/>
      </Typography>

        <DadosSociais 
        receberReligiao={religiao} 
        alterarReligiao={setReligiao}
        alterarOutraReligiao={setOutraReligiao}
        receberEscolaridade={escolaridade}
        alterarEscolaridade={setEscolaridade}
        receberOcupacao={ocupacao}
        alterarOcupacao={setOcupacao}
        alterarOutraOcupacao={setOutraOcupaccao}
        receberPrevidencia={previdencia}
        alterarPrevidencia={setPrevidencia}
        alterarOutraPrevidencia={setOutraPrevidencia}
        receberBeneficios={beneficios}
        alterarBeneficios={setBeneficios}
        alterarOutrosBeneficios={setOutrosBeneficios}
        receberMoradia={moradia}
        alterarMoradia={setMoradia}
        alterarOutraMoradia={setOutraMoradia}
        
        />
      </Card>

      <Card sx={{ mb: 2, marginTop:'20px' }}>
        <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
        Vinculos Sociais
        <Divider />
      </Typography>

      <VinculosSociais 
      
      />
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
