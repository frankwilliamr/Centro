import * as React from 'react';
import axios from 'axios';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function CadastroEndereco () {
    const [cep, setCep] = React.useState('');
    const [zona, setZona] = React.useState('');
    const [endereco, setEndereco]= React.useState({
        
        cidade: '',
        estado: '',
        bairro: '',
    });
    const [logradouro, setLogradouro] = React.useState('');
    const handleCepChange = async (event) => {
        const cepValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCep(cepValue);
    
        if (cepValue.length === 8) {
          try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = response.data;
            if (!data.erro) {
              setEndereco({
                
                cidade: data.localidade || '',
                estado: data.estado || '',
                bairro: data.bairro || '',
              });
              setLogradouro(data.logradouro || '')
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

      const handleChange = (event) => {
        setZona(event.target.value);
      };
    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          
          label="CEP"
          value = {cep}
          onChange = {handleCepChange}
          variant="standard"
          
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          
          name = 'bairro'
          label="Bairro"
          value = {endereco.bairro}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch' }}
          required
          
          label="Endereço"
          value = {logradouro}
          onChange = {(e)=> setLogradouro(e.target.value)}
          variant="standard"
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          name = 'cidade'
          label="Municipio de Residência"
          value = {endereco.cidade}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch' }}
          required
          name = 'estado'
          label="Estado"
          value = {endereco.estado}
          onChange = {handleEnderecoChange}
          variant="standard"
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="sexo" shrink sx={{ fontSize: '1.2rem' }}>Zona</InputLabel>
        
        <Select
          
          labelId="Zona"
          id="zona"
          value={zona}
          onChange={handleChange}
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