import * as React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid2 from '@mui/material/Grid2';
import InputMask from 'react-input-mask';





export default function DadosPessoais({alterarNome,
  alterarCpf,
  alterarNascimento,
  alterarRg,
  alterarContato,
  alterarResponsavel,
  alterarParentesco,
  alterarContatoResponsavel,
  alterarSexo,
  alterarMae,
  alterarPai,
  alterarNacionalidade,
  alterarNaturalidade,
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
  naturalidade,}) {
  

 
  
  
  return (
    
      
      <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
      <Grid2 item  xs={12} sm={6} md={4} lg={3}>
      
        <TextField
          sx={{  width: '50ch', paddingTop: '10px' }}
          required
          id="outlined-required"
          label="Nome Completo"
          value={nome}
          onChange={(e)=> alterarNome(e.target.value)}
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <InputMask
        mask="999.999.999-99" // Máscara para CPF
        value={cpf}
        onChange={(e) => alterarCpf(e.target.value.replace(/\D/g, ''))} // Armazenar apenas números
      >
        {(inputProps) => (
          <TextField
          {...inputProps} // Aplicar as propriedades do InputMask no TextField
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="CPF"
          label="CPF"
          fullWidth
          />
        )}
      </InputMask>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{  paddingTop: '10px' }}
          required
          type='date'
          id="nascimento"
          label= "Data de nascimento"
          value={nascimento}
          onChange={(e) => alterarNascimento(e.target.value)}
          InputLabelProps={{
            shrink: true
          }}
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
        mask = "99.999.999-99"
        value={rg}
        onChange={(e) => alterarRg(e.target.value.replace(/\D/g, '')) }
        >
        {(inputProps) => (
         
        <TextField
        {...inputProps}
        sx={{ width: '20ch', paddingTop: '10px' }}
        required
        type='text'
        id='RG'
        label='RG'
        
        
        
        /> 
        )}
          </InputMask>
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
        mask="(99) 99999-9999"
        value={contato}
        onChange={(e) => alterarContato(e.target.value.replace(/\D/g, '')) }
        >
        {(inputProps) => (
        <TextField
          {...inputProps}
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="Celular"
          label="Contato"
          
          
        /> )}
        </InputMask>
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      
       
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="Responsavel"
          label="Responsavel"
          value={responsavel}
          onChange={(e) => alterarResponsavel(e.target.value)}
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
          onChange={(e) => alterarParentesco(e.target.value)}
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
        <InputMask
        mask="(99) 99999-9999"
        value={contatoResponsavel}
        onChange={(e) => alterarContatoResponsavel(e.target.value.replace(/\D/g, ''))}
        >
        {(inputProps) => (
        <TextField
          {...inputProps}  
          sx={{ width: '20ch', paddingTop: '10px' }}
          required
          id="ContatoResponsavel"
          label="Contato Responsavel"
          
          
        />)}
        </InputMask>
      </Grid2>
      

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="sexo" shrink sx={{ fontSize: '1.2rem' }}>Sexo</InputLabel>
        
        <Select
          
          labelId="sexo"
          id="sexo"
          value={sexo}
          onChange={(e) => alterarSexo(e.target.value)}
          
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
          onChange={(e) => alterarMae(e.target.value)}
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="pai"
          label="Nome do Pai"
          value={pai}
          onChange={(e) => alterarPai(e.target.value)}
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="nacionalidade"
          label="Nacionalidade"
          value={nacionalidade}
          onChange={(e) => alterarNacionalidade(e.target.value)}
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', paddingTop: '10px' }}
          required
          id="naturalidade"
          label="Naturalidade"
          value={naturalidade}
          onChange={(e) => alterarNaturalidade(e.target.value)}
          
        />
      </Grid2>

      </Grid2>
      
  );
}