import { Box, TextField, Grid2, Card, Divider, Typography, Button } from "@mui/material"
import React, { useEffect } from "react";
import { collection, doc, addDoc, getDoc } from 'firebase/firestore';
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";
import { Try } from "@mui/icons-material";


export default function Atualizacao(){
    const [titulo, setTitulo] = React.useState('');
    const [data, setData] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const { id, adicionar, idAtt } = useParams();
    const [botao, setBotao] = React.useState(false);

 
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
          console.log('testando fetch')
        }else{
          setBotao(true);
        }
        
      }, [id, adicionar]);
      
        
      

    return(
        <Box sx={{ ml: 2, display: 'flex', mt: 4, justifyContent: 'center'  }}>
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
                      backgroundColor: botao ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      
            
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
        width: '100%', 
        paddingTop: '10px',
        '.MuiInputBase-root': {
                      backgroundColor: botao ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      
            
              },
       }}
      required
      type="date"
      id="nascimento"
      label="Data de nascimento"
      value={data}
      onChange={(e) => setData(e.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
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
        sx: {
          height: '200px',
          overflow: 'auto',
          readOnly: !botao,
        },
      }}
      
      sx={{
        width: '100%',
        mt: 4, // margem superior para dar espaço
        paddingTop: '10px',
        '.MuiInputBase-root': {
                      backgroundColor: botao ? (theme) => alpha(theme.palette.text.primary, 0.05) : 'inherit',
                      
            
              },
      }}
    />
  </Grid2>
  <Divider/>
  {botao && (
        <Button
          variant="contained"
          color="primary"
          onClick={addToSubcollection}
        >
          Salvar
        </Button>
      )}
        
      </Card>
        </Box>
    )
}