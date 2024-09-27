import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid2 from '@mui/material/Grid2';





export default function DadosPessoais() {
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

 

  
  
  return (
    
      
      <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
      <Grid2 item  xs={12} sm={6} md={4} lg={3}>
      
        <TextField
          sx={{  width: '50ch', paddingTop: '10px' }}
          required
          id="outlined-required"
          label="Nome Completo"
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="CPF"
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{  paddingTop: '10px' }}
          required
          type='date'
          id="nascimento"
          label= "Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          InputLabelProps={{
            shrink: true
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
        value={rg}
        onChange={(e) => setRg(e.target.value) }
        
        /> 
          

      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="Celular"
          label="Contato"
          value={contato}
          onChange={(e) => setContato(e.target.value) }
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      
       
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="Responsavel"
          label="Responsavel"
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
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
          value={parentesco}
          onChange={(e) => setParentesco(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Pai'>Pai</MenuItem>
          <MenuItem value='Mãe'>Mãe</MenuItem>
          <MenuItem value='Avô/Avó'>Avô/Avó</MenuItem>
        </Select>
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="Celular"
          label="Contato Responsavel"
          value={contatoResponsavel}
          onChange={(e) => setContatoResponsavel(e.target.value) }
          
        />
      </Grid2>
      

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="sexo" shrink sx={{ fontSize: '1.2rem' }}>Sexo</InputLabel>
        
        <Select
          
          labelId="sexo"
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Masculino'>Masculino</MenuItem>
          <MenuItem value='Feminino'>Feminino</MenuItem>
          
        </Select>
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch' , paddingTop: '10px'}}
          required
          id="mae"
          label="Nome da Mãe"
          value={mae}
          onChange={(e) => setMae(e.target.value)}
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="pai"
          label="Nome do Pai"
          value={pai}
          onChange={(e) => setPai(e.target.value)}
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="nacionalidade"
          label="Nacionalidade"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="naturalidade"
          label="Naturalidade"
          value={naturalidade}
          onChange={(e) => setNaturalidade(e.target.value)}
          
        />
      </Grid2>

      </Grid2>
      
  );
}