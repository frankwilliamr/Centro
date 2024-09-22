import * as React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function CadastroEndereco () {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco]= useState({
        logradouro: '',
        cidade: '',
        estado: '',
        bairro: '',
    });
    const handleCepChange = async (event) => {
        const cepValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCep(cepValue);
    
        if (cepValue.length === 8) {
          try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = response.data;
            if (!data.erro) {
              setEndereco({
                logradouro: data.logradouro || '',
                cidade: data.localidade || '',
                estado: data.estado || '',
                bairro: data.bairro || '',
              });
            } else {
              alert('CEP não encontrado!');
            }
          } catch (error) {
            alert('Erro ao buscar CEP!');
          }
        }
      };

      const handleEnderecoChange = (event) => {
        const { name, value } = event.target;
        setEndereco((prevEndereco) => ({
          ...prevEndereco,
          [name]: value,
        }));
      };
    return (
        <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          
          label="CEP"
          value = {cep}
          onChange = {handleCepChange}
          variant="standard"
          
          
        />
      </Grid>
      
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          
          name = 'bairro'
          label="Bairro"
          value = {endereco.bairro}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '80ch' }}
          required
          name = 'endereco'
          label="Endereço"
          value = {endereco.logradouro}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          name = 'cidade'
          label="Municipio de Residência"
          value = {endereco.cidade}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          name = 'estado'
          label="Estado"
          value = {endereco.estado}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid>
      </Grid>
    );
}