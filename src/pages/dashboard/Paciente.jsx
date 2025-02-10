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
import { useAuth } from "../sign-in/Autenticacao";
import {Stack} from "@mui/material";

export default function Paciente({}){
  const { id } = useParams();
  const {cargo} = useAuth();

  
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
  const [outraOcupacao, setOutraOcupacao] = React.useState('');
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

    let listOcupacao = ['Desempregado', 'Empregado', 'Autonomo', 'Dona de Casa', 'Estudante', 'EmpregadoFixo', 'Empregador', 'Mercado Informal', 'Aposentado', '']
    let listReligiao = ['Católico', 'Protestante', 'Espírita', 'Candomblé', 'Evangelico', '']
    let listMoradia = ['Em situação de rua', 'Albergado em abrigos públicos', 'Serviço residencial terapêutico', 'Não possui residência fixa', 'Moradia regular sozinho', 'Moradia regular com familiar', '' ]
    let listEstadoCivil = ['Solteiro','Separado de fato, não legalmente', 'Viúvo', 'Casado ou unido consensualmente', 'Divorciado legalmente', '']
    let listAjuda = ['Com ninguém', 'Vizinhos / Amigos', 'Familiares', '']
    
    function opcao(setOpcao, setOutraOpcao, valor ) {
          setOpcao('outro')
          setOutraOpcao(valor)

    }
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
          listReligiao.includes(data.religiaoFinal) ? setReligiao(data.religiaoFinal) : opcao(setReligiao, setOutraReligiao, data.religiaoFinal) 
          setEscolaridade(data.escolaridade)
          listOcupacao.includes(data?.ocupacaoFinal) ? setOcupacao(data?.ocupacaoFinal) : opcao(setOcupacao, setOutraOcupacao, data?.ocupacaoFinal)
          data.previdenciaFinal === 'não' || data.previdenciaFinal === '' ?  setPrevidencia(data.previdenciaFinal) : opcao(setPrevidencia, setOutraPrevidencia, data.previdencia)
          setOutraPrevidencia(data.previdenciaFinal)
          data.beneficiosFinal === 'BPC' || data.beneficiosFinal === 'Bolsa Família' ? setBeneficios(data.beneficiosFinal) : opcao(setBeneficios, setOutrosBeneficios, data.beneficiosFinal)
          listMoradia.includes(data.moradiaFinal) ? setMoradia(data.moradiaFinal) : opcao(setMoradia, setOutraMoradia, data.moradiaFinal)
          setCep(data.cep)
          setBairro(data.bairro)
          setLogradouro(data.logradouro)
          setCidade(data.cidade)
          setEstado(data.estado)
          setZona(data.zona)
          listEstadoCivil.includes(data.estadoCivilFinal) ? setEstadoCivil(data.estadoCivilFinal) : opcao(setEstadoCivil, setOutroEstadoCivil, data.estadoCivilFinal)
          listAjuda.includes(data.ajudaFinal) ? setAjuda(data.ajudaFinal) : opcao(setAjuda, setOutraAjuda, data.ajudaFinal)

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

  const handleAtualizacao = () =>{
    window.open(`#/paciente/listaatualizacao/${id}`, '_blank', 'width=800,height=600');
  }
  const handleEditar = () => {
    
    setEditando(true); 
  };
  
async function handleSalvar() {
  const docRef = doc(db, "internos", id); 
  
  try {
    //Dados Sociais
    const religiaoFinal = religiao === 'outro' ? outraReligiao : religiao;
    const ocupacaoFinal = ocupacao === 'outro' ? outraOcupacao : ocupacao;
    const previdenciaFinal = previdencia === 'sim' ? outraPrevidencia : previdencia;
    const beneficiosFinal = beneficios === 'outro' ? outrosBeneficios : beneficios;
    const moradiaFinal = moradia === 'outro' ? outrosBeneficios : moradia;
    const estadoCivilFinal = estadoCivil === 'outro' ? outroEstadoCivil : estadoCivil;
    const ajudaFinal = ajuda === 'outro' ? outraAjuda : ajuda;
    
    await updateDoc(docRef, {
      nome: editedNome,
      cpf: cpf,
      nascimento: nascimento,
      contato: contato,
      responsavel: responsavel,
      parentesco: parentesco,
      contatoResponsavel: contatoResponsavel,
      mae: mae,
      pai: pai,
      nacionalidade: nacionalidade,
      naturalidade: naturalidade,
      religiaoFinal: religiaoFinal,
      escolaridade: escolaridade,
      ocupacaoFinal: ocupacaoFinal,
      previdenciaFinal: previdenciaFinal,
      beneficiosFinal: beneficiosFinal,
      moradiaFinal: moradiaFinal,
      cep: cep,
      bairro: bairro,
      logradouro: logradouro,
      cidade: cidade,
      estado: estado,
      zona: zona,
      estadoCivilFinal: estadoCivilFinal,
      ajudaFinal: ajudaFinal,
      capacidade: capacidade,
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
  
  return(
    
    <Box  sx={{ display: 'flex' }}>
          <SideMenu />
          <AppNavbar />

    <Box component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: alpha(theme.palette.background.default, 1),
              overflow: 'auto',
              mt: 2
            })}>
              <Stack
              spacing={2}
              sx={{
                alignItems: 'center',
                mx: 3,
                pb: 10,
                mt: { xs: 8, md: 0 },
              }}
            >
      <Card sx={{ width: '100%',  mr: 2}}>
        
       <Grid2  
        container 
        spacing={2}
         
        justifyContent="space-between"
         >
        <Grid2 item  xs={12} sm={6}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Prontuario de {editedNome}
        
       </Typography>
        </Grid2>
          <Grid2 item sx={{ml: 0, mt: 0}}>
          {!editando ? (
                <Button 
                variant="contained" 
                color="primary" 
                onClick={handleEditar}
                size="small"
                sx={{ml: 0, width: '20px'}}
                >
                  Editar
                </Button>
              ) : (
                <>
                  <Button variant="contained" size="small" color="primary" onClick={handleSalvar}>
                    Salvar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ ml: 2 }}
                    onClick={handleCancelar}
                  >
                    Cancelar
                  </Button>
                </>
              )}
              
          </Grid2>
              
                
      </Grid2>
      <Divider />
      <Grid2 container  spacing={2} fullWidth sx={{ width: '100%', margin: '0 auto',  mt: 4, justifyContent: 'center', gap: 2}}>
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
          
          <TextField
                sx={{  
                  width: '50ch', 
                  paddingTop: '10px', 
                  '.MuiInputBase-root': {
                      backgroundColor: editando 
                      ? (cargo === 'admin' 
                          ? 'none' 
                          : (theme) => alpha(theme.palette.text.primary, 0.05)
                        ) 
                      : 'inherit',
                      borderRadius: '4px',
            
              },
                }}
                
                id="outlined-required"
                label="Nome Completo"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
                InputProps={{
                  readOnly: !(editando && cargo === 'admin'),
                }}
                
              />
          
        </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <InputMask
        mask="999.999.999-99" // Máscara para CPF
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        
      >
        {(inputProps) => (
          <TextField
          {...inputProps} // Aplicar as propriedades do InputMask no TextField
          sx={{ 
            width: '20ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
            backgroundColor: editando 
            ? (cargo === 'admin' 
                ? 'none' 
                : (theme) => alpha(theme.palette.text.primary, 0.05)
              ) 
            : 'inherit',
            borderRadius: '4px',
            
              },
           }}
          
          id="CPF"
          label="CPF"
          fullWidth
          InputProps={{
            readOnly: !(editando && cargo === 'admin'),
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
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
            
           }}
          
          type='date'
          id="nascimento"
          label= "Data de nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            readOnly: !editando,
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
            backgroundColor: editando ? "none" : 'inherit',
            borderRadius: '4px',
            
              },
              
        }}
        
        type='text'
        id='RG'
        label='RG'
        InputProps={{
          readOnly: !editando,
        }}
        InputLabelProps={{shrink: true}}
        
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
      <FormControl   sx={{ minWidth: 120, paddingTop: '10px',  }}
          >
        <InputLabel  id="Parentesco" shrink sx={{ fontSize: '0.8rem' }}>Parentesco</InputLabel>
        
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
      <FormControl  sx={{ minWidth: 120, paddingTop: '10px' }}
          >
        <InputLabel  id="sexo" shrink sx={{ fontSize: '0.8  rem' }}>Sexo</InputLabel>
        
        <Select
          
          labelId="sexo"
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          disabled={!editando}
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
            
            width: '40ch' , 
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
            width: '40ch', 
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
            width: '30ch', 
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
            width: '30ch', 
            paddingTop: '10px',
            '.MuiInputBase-root': {
              backgroundColor: editando ? 'none' : 'inherit',
              borderRadius: '4px',
              
                },
           }}
          
          id="naturalidade"
          label="Naturalidade"
          value={naturalidade}
          onChange={(e) => setNaturalidade(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{shrink: true}}
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="religiao" shrink sx={{ fontSize: '0.8rem', marginLeft: 1 }}>Religião</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="religiao"
          id="religiao"
          value={religiao}
          onChange={(e) => setReligiao(e.target.value)}
          disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Católico'>Católico</MenuItem>
          <MenuItem value='Protestante'>Protestante</MenuItem>
          <MenuItem value='Espírita'>Espírita</MenuItem>
          <MenuItem value='Candomblé'>Candomblé</MenuItem>
          <MenuItem value='Evangelico'>Evangelico</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

      
          
        </Select>

        {religiao === 'outro' && (
        <TextField
          label="Outros"
          
          value={outraReligiao}
          onChange={(e) => setOutraReligiao(e.target.value)}
          InputProps={{readOnly: !editando,}}
          
          sx={{
            width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              },
            
           }}
        />
      )}
        
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="escolaridade" shrink sx={{ fontSize: '0.8rem' }}>Escolaridade</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="escolaridade"
          id="escolaridade"
          value={escolaridade}
          onChange={(e) => setEscolaridade(e.target.value)}
          disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Analfabeto'>Analfabeto</MenuItem>
          <MenuItem value='1º Grau inclompelto'>1º Grau inclompelto</MenuItem>
          <MenuItem value='2º Grau inclompelto'>2º Grau inclompelto</MenuItem>
          <MenuItem value='3º Grau inclompelto'>3º Grau inclompelto</MenuItem>
          <MenuItem value='Analfabeto (Escreve o nome)'>Analfabeto (Escreve o nome)</MenuItem>
          <MenuItem value='1º Grau completo'>1º Grau completo</MenuItem>
          <MenuItem value='2º Grau completo'>2º Grau completo</MenuItem>
          <MenuItem value='3º Grau completo'>3º Grau completo</MenuItem>
          
        </Select>

        
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="ocupacao" shrink sx={{ fontSize: '0.8rem' }}>Ocupação Atual</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="ocupacao"
          id="ocupacao"
         value={ocupacao}
         onChange={(e) => setOcupacao(e.target.value)}
         disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Desempregado'  >Desempregado</MenuItem>
          <MenuItem value='Empregado'>Empregado</MenuItem>
          <MenuItem value='Autonomo'>Autonomo</MenuItem>
          <MenuItem value='Dona de Casa'>Dona de Casa</MenuItem>
          <MenuItem value='Estudante'>Estudante</MenuItem>
          <MenuItem value='EmpregadoFixo'>Empregado fixo</MenuItem>
          <MenuItem value='Empregador'>Empregador</MenuItem>
          <MenuItem value='Mercado Informal'>Mercado Informal</MenuItem>
          <MenuItem value='Aposentado'>Aposentado</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>
        </Select>
        
        {ocupacao === 'outro' && (
        <TextField
          label="Ocupação Atual"
          
          value={outraOcupacao}
          onChange={(e) => setOutraOcupacao(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)', // Move o label para cima
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />
      )}
        
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="previdencia" shrink sx={{ fontSize: '0.8rem' }}>Vinculo previdênciario</InputLabel>
        
        <Select
          sx={{ width: '25ch'}}
          labelId="previdencia"
          id="previdencia"
          value={previdencia}
          disabled={!editando}
          onChange={(e) => setPrevidencia(e.target.value)}
       
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='não'>Não</MenuItem>
          <MenuItem value='outro'>Sim</MenuItem>
        </Select>

        {previdencia === 'outro' && (
        <TextField
          label="Previdencia"
          
          value={outraPrevidencia}
          onChange={(e) => setOutraPrevidencia(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)', // Move o label para cima
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />)}

      </FormControl>
      </Grid2>
      
      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="beneficio" shrink sx={{ fontSize: '0.8rem' }}>Benefícios Sociais</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="beneficio"
          id="beneficio"
          value={beneficios}
          onChange={(e) => setBeneficios(e.target.value)}
          disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='BPC'>BPC</MenuItem>
          <MenuItem value='Bolsa Família'>Bolsa Família</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

        </Select>
        {beneficios === 'outro' && (
        <TextField
          label="Outros"
          
          value={outrosBeneficios}
          onChange={(e) => setOutrosBeneficios(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)', 
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />)}

     
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '0.8rem' }}>Moradia Atual</InputLabel>
        
        <Select
          sx={{ width: '35ch'}}
          labelId="Moradia"
          id="Moradia"
          value={moradia}
          onChange={(e) => setMoradia(e.target.value)}
          disabled={!editando}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Em situação de rua'  >Em situação de rua</MenuItem>
          <MenuItem value='Albergado em abrigos públicos'>Albergado em abrigos públicos</MenuItem>
          <MenuItem value='Serviço residencial terapêutico'>Serviço residencial terapêutico</MenuItem>
          <MenuItem value='Não possui residência fixa'>Não possui residência fixa</MenuItem>
          <MenuItem value='Moradia regular sozinho'>Moradia regular sozinho</MenuItem>
          <MenuItem value='Moradia regular com familiar'>Moradia regular com familiar</MenuItem>
          <MenuItem value='outro'>Outro</MenuItem>
        </Select>
        {moradia === 'outro' && (
        <TextField
          label="Moradia Atual"
          
          value={outraMoradia}
          onChange={(e) => setOutraMoradia(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)', // Move o label para cima
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />
      )}
   
      </FormControl>
      </Grid2>
      
        <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <InputMask
         mask="99999-999"
         value = {cep}
         onChange = {handleCepChange}>
          {(inputProps) => (
        <TextField
         InputProps={{readOnly: !editando,}}
         sx={{ width: '30ch', 
          paddingTop: '10px',
           
          '.MuiInputBase-root': {
          backgroundColor: editando ? 'none' : 'inherit',
          borderRadius: '4px',
          
            }, }}
          
          
          label="CEP"
         
          
          
          
        />)}
        </InputMask>
      </Grid2>    

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          InputProps={{readOnly: !editando,}}
          sx={{ width: '30ch', 
           paddingTop: '10px',
            
           '.MuiInputBase-root': {
           backgroundColor: editando ? 'none' : 'inherit',
           borderRadius: '4px',
           
             }, }}
          
          name = 'bairro'
          label="Bairro"
          value = {bairro}
          onChange = {(e) => setBairro(e.target.value)}
          
          
          
        />
      </Grid2>

      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          InputProps={{readOnly: !editando,}}
          sx={{ width: '40ch', 
           paddingTop: '10px',

           '.MuiInputBase-root': {
           backgroundColor: editando ? 'none' : 'inherit',
           borderRadius: '4px',
           
             }, }}
          
          label="Endereço"
          value = {logradouro}
          onChange = {(e)=> setLogradouro(e.target.value)}
          
          
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
          InputProps={{readOnly: !editando,}}
          sx={{ width: '40ch', 
           paddingTop: '10px',
           
           '.MuiInputBase-root': {
           backgroundColor: editando ? 'none' : 'inherit',
           borderRadius: '4px',
           
             }, }}
          name = 'cidade'
          label="Municipio de Residência"
          value = {cidade}
          onChange = {(e) => setCidade(e.target.value)}
          
          
          
        />
      </Grid2>
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
        <TextField
         InputProps={{readOnly: !editando,}}
         sx={{ width: '25ch', 
          paddingTop: '10px',
          
          '.MuiInputBase-root': {
          backgroundColor: editando ? 'none' : 'inherit',
          borderRadius: '4px',
          
            }, }}
          name = 'estado'
          label="Estado"
          value = {estado}
          onChange = {(e) => setEstado(e.target.value)}
          
          
          
        />
      </Grid2>       
      
      <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <FormControl  sx={{ minWidth: 120, paddingTop: '10px' }}
          >
        <InputLabel required id="Zona" shrink sx={{ fontSize: '0.8rem' }}>Zona</InputLabel>
        
        <Select
          
          labelId="Zona"
          id="zona"
          value={zona}
          onChange={(e) => setZona(e.target.value)}
          disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Zona Rural'>Zona Rural</MenuItem>
          <MenuItem value='Zona Urbana'>Zona Urbana</MenuItem>
          
        </Select>
      </FormControl>
      </Grid2>      

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="estadoCivil" shrink sx={{ fontSize: '0.8rem' }}>Situação Conjugal</InputLabel>
        
        <Select
          sx={{ width: '35ch'}}
          labelId="estadoCivil"
          id="estadoCivil"
          disabled={!editando}
          value={estadoCivil}
          onChange={(e) => setEstadoCivil(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Solteiro'>Solteiro</MenuItem>
          <MenuItem value='Separado de fato, não legalmente'>Separado de fato, não legalmente</MenuItem>
          <MenuItem value='Viúvo'>Viúvo</MenuItem>
          <MenuItem value='Casado ou unido consensualmente'>Casado ou unido consensualmente</MenuItem>
          <MenuItem value='Divorciado legalmente'>Divorciado legalmente</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

      
          
        </Select>
        {estadoCivil === 'outro' && (
        <TextField
          label="Outros"
          
          value={outroEstadoCivil}
          onChange={(e) => setOutroEstadoCivil(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)', // Move o label para cima
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />
      )}
        
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="escolaridade" shrink sx={{ fontSize: '0.8rem' }}>Com quem o usuário conta</InputLabel>
        
        <Select
          sx={{ width: '30ch'}}
          labelId="Parentesco"
          id="Parentesco"
          value={ajuda}
          onChange={(e) => setAjuda(e.target.value)}
          disabled={!editando}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Com ninguém'>Com ninguém</MenuItem>
          <MenuItem value='Vizinhos / Amigos'>Vizinhos / Amigos</MenuItem>
          <MenuItem value='Familiares'>Familiares</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>
          
        </Select>
        {ajuda === 'outro' && (
        <TextField
          label="Outro"
          
          value={outraAjuda}
          onChange={(e) => setOutraAjuda(e.target.value)}
          InputProps={{readOnly: !editando,}}
          InputLabelProps={{
            style: {
            fontFamily: 'inherit',
            transform: 'translate(0, -18px)',
            fontSize: '0.6rem'
          },}}
          sx={{ width: '30ch', 
            
            marginLeft: 2, 
            '.MuiInputBase-root': {
            backgroundColor: editando ? 'none' : 'inherit',
            borderRadius: '4px',
            
              }, }}
        />
      )}
        
      </FormControl>
      
      </Grid2>
      
      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', paddingTop: '10px'}}
          >
        <InputLabel  id="capacidade" shrink sx={{ fontSize: '0.8rem' }}>Capacidades e Habilidades</InputLabel>
        
        <Select
          sx={{ width: '40ch'}}
          labelId="capacidade"
          id="capacidade"
          value={capacidade}
          onChange={(e) => setCapacidade(e.target.value)}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Totalmente Dependente'  >Totalmente Dependente</MenuItem>
          <MenuItem value='Moderadamente grave(rever supervisão constante)'>Moderadamente grave(rever supervisão constante)</MenuItem>
          <MenuItem value='Moderado (requer mínimo de supervisão ou estímulo diário)'>Moderado (requer mínimo de supervisão ou estímulo diário)</MenuItem>
          <MenuItem value='Leve (requer mínimo de supervisão ou estímulo)'> Leve (requer mínimo de supervisão ou estímulo)</MenuItem>
          <MenuItem value='Completamente independente'>Completamente independente </MenuItem>
          
        </Select>

        
      </FormControl>
      </Grid2>

      </Grid2>
      <Divider sx={{mt: 3}}/>
      <Grid2 sx={{
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex',
    
  }}>
      
        <Button
          variant="contained"
          color="primary"
          onClick={handleAtualizacao}
          size="large"
          sx={{ ml: 0, width: '150px', mt: 3 }}
        >
          Atualizações
        </Button>
      
      </Grid2>
      
      </Card>
      </Stack>
      </Box>
    </Box>
    

  );
}