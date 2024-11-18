import * as React from 'react';
import axios from 'axios';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';

export default function CadastroEndereco ({cep,
  zona,
  logradouro,
  cidade,
  estado,
  bairro,
  alterarCep,
  alterarZona,
  alterarLogradouro,
  alterarCidade,
  alterarEstado,
  alterarBairro

}) {
    
    
    
    
    const handleCepChange = async (event) => {
        const cepValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        alterarCep(cepValue);
    
        if (cepValue.length === 8) {
          try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = response.data;
            if (!data.erro) {
              
              alterarLogradouro(data.logradouro || '')
              alterarCidade(data.localidade || '')
              alterarEstado(data.estado || '')
              alterarBairro(data.bairro || '')
            } else {
              alert('CEP não encontrado!');
            }
          } catch (error) {
            alert('Erro ao buscar CEP!');
          }
        }
      };

      


    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
         mask="99999-999"
         value = {cep}
         onChange = {handleCepChange}>
          {(inputProps) => (
        <TextField
         {...inputProps}
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          
          label="CEP"
         
          
          
          
        />)}
        </InputMask>
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2}}
          
          name = 'bairro'
          label="Bairro"
          value = {bairro}
          onChange = {(e) => alterarBairro(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          
          label="Endereço"
          value = {logradouro}
          onChange = {(e)=> alterarLogradouro(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          name = 'cidade'
          label="Municipio de Residência"
          value = {cidade}
          onChange = {(e) => alterarCidade(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          name = 'estado'
          label="Estado"
          value = {estado}
          onChange = {(e) => alterarEstado(e.target.value)}
          
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel  id="Zona" shrink sx={{ fontSize: '1.2rem' }}>Zona</InputLabel>
        
        <Select
          
          labelId="Zona"
          id="zona"
          value={zona}
          onChange={(e) => alterarZona(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Zona Rural'>Zona Rural</MenuItem>
          <MenuItem value='Zona Urbana'>Zona Urbana</MenuItem>
          
        </Select>
      </FormControl>
      </Grid2>
      </Grid2>
    );
}