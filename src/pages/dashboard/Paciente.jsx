import React, { useEffect, useState, } from "react";
import axios from "axios";
import {  Grid2, Typography, Box, Card, TextField, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import AppNavbar from './components/AppNavbar';
import SideMenu from './components/SideMenu';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';


export default function Paciente({}){
  const { id } = useParams();
  const [dados, setDados] = useState([]);
  const [editando, setEditando] = useState(false); 
  //Dados Pessoais
  const [editedNome, setEditedNome] = useState(''); 
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
  
  //Endereço
    const [cep, setCep] = React.useState('');
    const [zona, setZona] = React.useState('');
    const [logradouro, setLogradouro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const [estado, setEstado] = React.useState('');
    const [bairro, setBairro] = React.useState('');
  //Vinculos Sociais
    const [estadoCivil, setEstadoCivil] = React.useState('');
    const [outroEstadoCivil, setOutroEstadoCivil] = React.useState('');
    const [ajuda, setAjuda] = React.useState('');
    const [outraAjuda, setOutraAjuda] = React.useState('');
    const [capacidade, setCapacidade] = React.useState('');
  
    
    const fetchDados = async () => {
      try {
        
        const docRef = doc(db, "internos", id); 

        
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setDados(data);
          setEditedNome(data.nome)
          setCpf(data.cpf)
          setNascimento(data.nascimento)
          setRg(data.rg)
          setContato(data.contato)
          setResponsavel(data.responsavel)
          setParentesco(data.parentesco)
          setContatoResponsavel(data.contatoResponsavel)
          setSexo(data.sexo)
          setMae(data.mae)
          setPai(data.pai)
          setNacionalidade(data.nacionalidade)
          setNaturalidade(data.naturalidade)
          
           // Atribui o título ou outro campo que você queira
        } else {
          console.log("Nenhum documento encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

  useEffect(() => {
    fetchDados();
    
  }, [id]);

  // useEffect(() => {
    
  //   axios.get("https://jsonplaceholder.typicode.com/posts?id=1")
        
  //     .then(response => {
  //       setDados(response.data.find(id => id.id === 1)); 
  //       setEditedTitle(dados.title)
        
        
  //     })
      
  //     .catch(error => {
  //       console.error("Erro ao buscar os dados:", error);
  //     });
  // }, []);
  
  const handleEditar = () => {
    
    setEditando(true); 
  };
  
//   const handleSalvar = () => {
//     console.log(editedTitle)
//     axios.put("https://jsonplaceholder.typicode.com//posts/1", {
//       title: editedTitle, 
//     })
//     .then((response) => {
//       console.log("Dados salvos:", response.data);
//       setEditando(false); 
      
   
//     })
//     .catch((error) => {
//       console.error("Erro ao salvar os dados:", error);
//     });
// };
async function handleSalvar() {
  const docRef = doc(db, "internos", id); 
  
  try {
    await updateDoc(docRef, {
      nome: editedNome,
      contato: contato,
      responsavel: responsavel,
      parentesco: parentesco,
      contatoResponsavel: contatoResponsavel,
      mae: mae,
      pai: pai,
      nacionalidade: nacionalidade,
      naturalidade: naturalidade,
      
    });
    console.log("Dados salvos");
    setEditando(false);
  } catch (error) {
    console.error("Erro ao salvar os dados:", error);
  }
  
}


  
  
  const handleCancelar = () => {
    
    setEditando(false);
    fetchDados();
    
  };
  
  
  return(
    
    <Box sx={{ ml: 2, display: 'flex' }}>
          <SideMenu />
          <AppNavbar />

      
      <Card sx={{ width: '100%', mt: 2, mr: 2}}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Prontuario de {editedNome}
        <Divider />
      </Typography>
      
      <Grid2 item xs={12} sm={6}>
              {!editando ? (
                <Button variant="contained" color="primary" onClick={handleEditar}>
                  Editar
                </Button>
              ) : (
                <>
                  <Button variant="contained" color="primary" onClick={handleSalvar}>
                    Salvar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 2 }}
                    onClick={handleCancelar}
                  >
                    Cancelar
                  </Button>
                </>
              )}
            </Grid2>
      <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center'}}>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
          
          <TextField
                sx={{  
                  width: '50ch', 
                  paddingTop: '10px', 
                  '.MuiInputBase-root': {
                      backgroundColor: editando ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      borderRadius: '4px',
            
              },
                }}
                required
                id="outlined-required"
                label="Nome Completo"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
                InputProps={{
                  readOnly: true,
                }}
                
              />
          
        </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <InputMask
        mask="999.999.999-99" // Máscara para CPF
        value={cpf}
        
        
      >
        {(inputProps) => (
          <TextField
          {...inputProps} // Aplicar as propriedades do InputMask no TextField
          sx={{ 
            width: '20ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
            borderRadius: '4px',
            
              },
           }}
          
          id="CPF"
          label="CPF"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          />
        )}
      </InputMask>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{  
            width: '17ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
            borderRadius: '4px',
            
              },
            
           }}
          
          
          id="nascimento"
          label= "Data de nascimento"
          value={nascimento}
          InputProps={{
            readOnly: true,
          }}
          
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
        mask = "99.999.999-99"
        value={rg}
        
        >
        {(inputProps) => (
         
        <TextField
        {...inputProps}
        sx={{ 
          width: '20ch',
          paddingTop: '10px',
          '.MuiInputBase-root': {
            backgroundColor: editando ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
            borderRadius: '4px',
            
              },
              
        }}
        
        type='text'
        id='RG'
        label='RG'
        InputProps={{
          readOnly: true,
        }}
        
        
        /> 
        )}
          </InputMask>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
        mask="(99) 99999-9999"
        value={contato}
        onChange={(e) => setContato(e.target.value.replace(/\D/g, '')) }
        >
        {(inputProps) => (
        <TextField
          {...inputProps}
          sx={{ 
            width: '20ch',
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
            
          }}
          
          id="Celular"
          label="Contato"
          InputProps={{readOnly: !editando, }}
          InputLabelProps={{shrink: true}}
          
        /> )}
        </InputMask>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      
       
      <TextField
        sx={{ 
          width: '50ch', 
          paddingTop: '10px',
          '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
        }}
        
        id="Responsavel"
        label="Responsavel"
        value={responsavel}
        onChange={(e) => setResponsavel(e.target.value)}
        fullWidth
        InputProps={{readOnly: !editando,}}
        InputLabelProps={{shrink: true}}
      /> 
    </Grid2>

    <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <FormControl  variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel  id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Parentesco</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={parentesco}
          onChange={(e) => setParentesco(e.target.value)}
          disabled={!editando}
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
        onChange={(e) => setContatoResponsavel(e.target.value.replace(/\D/g, ''))}
        >
        {(inputProps) => (
        <TextField
          {...inputProps}  
          sx={{ 
            width: '20ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
          }}
          
          id="ContatoResponsavel"
          label="Contato Responsavel"
          InputProps={{readOnly: !editando, }}
          InputLabelProps={{shrink: true}}
          
        />)}
        </InputMask>
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel  id="sexo" shrink sx={{ fontSize: '1.2rem' }}>Sexo</InputLabel>
        
        <Select
          
          labelId="sexo"
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          disabled={true}
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
          sx={{ 
            
            width: '50ch' , 
            paddingTop: '10px', 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
          }}
          
          id="mae"
          label="Nome da Mãe"
          value={mae}
          onChange={(e) => setMae(e.target.value)}
          InputProps={{ readOnly: !editando,}}
          InputLabelProps={{shrink: true}}
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ 
            width: '50ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
           }}
          required
          id="pai"
          label="Nome do Pai"
          value={pai}
          onChange={(e) => setPai(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{shrink: true}}
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3} >
      <TextField
          sx={{ 
            width: '50ch', 
            paddingTop: '10px', 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
          }}
          required
          id="nacionalidade"
          label="Nacionalidade"
          value={nacionalidade}
          onChange={(e) => setNacionalidade(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{shrink: true}}
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          sx={{ 
            width: '50ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
              backgroundColor: editando ? 'none' : 'inherit',
              borderRadius: '4px',
              
                },
           }}
          required
          id="naturalidade"
          label="Naturalidade"
          value={naturalidade}
          onChange={(e) => setNaturalidade(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{shrink: true}}
          
        />
      </Grid2>

      </Grid2>
      </Card>
      
    </Box>
    

  );
}