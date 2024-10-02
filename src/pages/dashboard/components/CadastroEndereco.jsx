import * as React from 'react';
import axios from 'axios';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function CadastroEndereco ({onChange}) {
    const [cep, setCep] = React.useState('');
    const [zona, setZona] = React.useState('');
    const [logradouro, setLogradouro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    
    React.useEffect(() => {
      onChange({
        cep, zona, logradouro, cidade, estado, bairro
      });
    }, [cep, zona, logradouro, cidade, estado, bairro]);
    
    const handleCepChange = async (event) => {
        const cepValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCep(cepValue);
    
        if (cepValue.length === 8) {
          try {
            const response = await axios.get(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = response.data;
            if (!data.erro) {
              
              setLogradouro(data.logradouro || '')
              setCidade(data.localidade || '')
              setEstado(data.estado || '')
              setBairro(data.bairro || '')
            } else {
              alert('CEP não encontrado!');
            }
          } catch (error) {
            alert('Erro ao buscar CEP!');
          }
        }
      };

      

      const handleChange = (event) => {
        setZona(event.target.value);
      };
    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          
          label="CEP"
          value = {cep}
          onChange = {handleCepChange}
          
          
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2}}
          
          name = 'bairro'
          label="Bairro"
          value = {bairro}
          onChange = {(e) => setBairro(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '50ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          
          label="Endereço"
          value = {logradouro}
          onChange = {(e)=> setLogradouro(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          name = 'cidade'
          label="Municipio de Residência"
          value = {cidade}
          onChange = {(e) => setCidade(e.target.value)}
          
          
          
        />
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ width: '30ch', padding: '10px', paddingLeft: '5px', mr: -2 }}
          required
          name = 'estado'
          label="Estado"
          value = {estado}
          onChange = {(e) => setEstado(e.target.value)}
          
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Zona" shrink sx={{ fontSize: '1.2rem' }}>Zona</InputLabel>
        
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