import { Box, TextField, Grid2, Card, Divider, Typography, Button } from "@mui/material"
import React, { useEffect, } from "react";
import { collection, doc, addDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../../../firebase";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Try } from "@mui/icons-material";
import { alpha } from '@mui/material/styles';
import {Dialog,  DialogActions,  DialogContent, DialogContentText, DialogTitle} from '@mui/material';

export default function Atualizacao(){
    const [titulo, setTitulo] = React.useState('');
    const [data, setData] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const { id, adicionar, idAtt } = useParams();
    const [botao, setBotao] = React.useState(false);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
 

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
      handleClose(); // Fecha o diálogo
      const camposObrigatorios = [];
    
    if (!titulo) camposObrigatorios.push('Titulo')
    if (!descricao) {
         camposObrigatorios.push('Descrição')
    
    }if (camposObrigatorios.length > 0) {
      alert(`Preencha os seguintes campos obrigatórios: ${camposObrigatorios.join(', ')}`);
      return; 
   } 
      addToSubcollection();  
    };
  
    

    async function fetchAtualizacoes() {

          

          try {
            const docRef = doc(db, 'internos', id);
        
            // Referência à subcoleção dentro do documento
            const subDocRef = doc(docRef, 'atualizacao', idAtt); 

            const docSnap = await getDoc(subDocRef);
            if(docSnap.exists()) {
              const data = docSnap.data();
              setTitulo(data.titulo)
              setData(data.data)
              setDescricao(data.descricao)
              
            }else {
              console.log("Nenhum documento encontrado!", id);
              
            }
          } catch (error) {
            console.error('Erro ao exibir as informações:', error);
           throw error;
          }
    }
    async function addToSubcollection() {
      
        try {
          // Referência ao documento específico na coleção 'internos'
            const docRef = doc(db, 'internos', id);
            
           
            // Referência à subcoleção dentro do documento
            const subcollectionRef = collection(docRef, 'atualizacao'); // Substitua 'suaSubcolecao' pelo nome da subcoleção

            // Adiciona o documento na subcoleção
            const subDocRef = await addDoc(subcollectionRef,{
              titulo: titulo,
              data: data,
              descricao: descricao,
            });
            
            alert('Dados cadastrados com sucesso!')
              navigate(-1)

            await updateDoc(docRef, {
              ultimoAtendimento: data, // Atualiza o campo 'ultimoAtendimento' com a data fornecida
            });

            
            console.log('Documento adicionado na subcoleção com ID:', subDocRef.id);
            return subDocRef.id;
          
        } catch (error) {
          console.error('Erro ao adicionar documento na subcoleção:', error);
          throw error;
        }
      }
      useEffect(() => {
        if(adicionar !== 'novo'){
          fetchAtualizacoes();
          
        }else{
          setBotao(true);
          const dataHora = {
            
              date: new Date().toISOString().split('T')[0],
              time: new Date().toLocaleTimeString('en-US', { hour12: false })
              
          }
          const dataCorreta = dataHora.date.split('-').reverse().join('-')
          setData(`${dataCorreta} - ${dataHora.time}`)
          
        }
        
      }, [id, adicionar]);
      
        const voltarPagina = () => {
            navigate(-1);
        }
      

    return(
        <Box sx={{ ml: 2, display: 'flex', mt: 4, justifyContent: 'center',   }}>
        <Card sx={{ mb: 2, marginTop:'20px' }}>
            <Grid2 
            container 
            spacing={2}
            justifyContent="space-between" 
            sx={{mb: 2}}  
            >
              
                <Grid2><Typography component="h2" variant="h6" >
                Atualizações</Typography>
                </Grid2>
                <Grid2>
            {!botao && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={voltarPagina}
              sx={{padding: '0px'}}
              
                       >
                   Voltar
                 </Button>
                   )}
            </Grid2>
                       
            </Grid2>
              
            <Divider/>
  <Grid2 
  container 
  spacing={2} 
  sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', mt: 3 }}
>
  {/* Linha com Título e Data */}
  <Grid2 item xs={12} sm={6}>
    <TextField
      sx={{ 
        width: '100%', 
        paddingTop: '10px',
        '.MuiInputBase-root': {
                      backgroundColor: !botao ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      
            
              },
      }}
      required
      id="outlined-required"
      label="Título"
      value={titulo}
      onChange={(e) => setTitulo(e.target.value)}
      InputProps={{
        readOnly: !botao,
      }}
    />
  </Grid2>
  <Grid2 item xs={12} sm={6}>
    <TextField
      sx={{ 
        width: '85%', 
        paddingTop: '10px',
        '.MuiInputBase-root': {
                      backgroundColor: (theme) => alpha(theme.palette.text.primary, 0.05),
                      
            
              },
       }}
      
      
      id="nascimento"
      label="Data de nascimento"
      value={data}
      
      
      InputProps={{
        readOnly: true,
      }}
    />
  </Grid2>

  {/* Campo Multiline abaixo */}
  
</Grid2>
<Grid2  xs={12}>
    <TextField
      id="outlined-multiline-static"
      label="Descrição"
      multiline
      rows={8}
      defaultValue=""
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
      InputProps={{
        readOnly: !botao,
        sx: {
          height: '200px',
          overflow: 'auto',
          
        },
      }}
      
      sx={{
        width: '100%',
        mt: 4, // margem superior para dar espaço
        paddingTop: '10px',
        '.MuiInputBase-root': {
                      backgroundColor:!botao ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      
            
              },
      }}
    />
  </Grid2>
  <Divider/>
  {botao && (
        <Grid2 container justifyContent= 'center'>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleOpen}
          sx={{padding: '0px', mr: 1, mt: 2}}
        >
          Salvar
        </Button>
       
       
       <Button
        variant="outlined"
        size="small"
        color="secondary"
        onClick={voltarPagina}
        sx={{padding: '0px', mt: 2}}
        
                 >
             Cancelar
           </Button>
          </Grid2>
          )}
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">Confirmar Salvar</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Tem certeza que deseja salvar essas alterações?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Sim
          </Button>
          <Button onClick={handleClose} color="secondary">
            Não
          </Button>
        </DialogActions>
      </Dialog>
      </Card>
        </Box>
    )
}