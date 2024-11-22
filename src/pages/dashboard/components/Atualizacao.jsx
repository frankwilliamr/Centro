import { Box, TextField, Grid2, Card, Divider, Typography, Button } from "@mui/material"
import React from "react";
import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";


export default function Atualizacao(){
    const [titulo, setTitulo] = React.useState('');
    const [data, setData] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const { id } = useParams();
    async function addToSubcollection(idInterno, dadosParaEnvio) {
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

    return(
        <Box sx={{ ml: 2, display: 'flex', mt: 4, justifyContent: 'center'  }}>
        <Card sx={{ mb: 2, marginTop:'20px' }}>
            <Grid2 sx={{justifyContent: 'center'}}>
                
                <Typography component="h2" variant="h6" >
                    Atualizações</Typography>
            
            
            </Grid2>
            
            <Divider/>
        <Grid2 
  container 
  spacing={2} 
  sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', mt: 2 }}
>
  {/* Linha com Título e Data */}
  <Grid2 item xs={12} sm={6}>
    <TextField
      sx={{ width: '100%', paddingTop: '10px' }}
      required
      id="outlined-required"
      label="Título"
    />
  </Grid2>
  <Grid2 item xs={12} sm={6}>
    <TextField
      sx={{ width: '100%', paddingTop: '10px' }}
      required
      type="date"
      id="nascimento"
      label="Data de nascimento"
      value={data}
      onChange={(e) => setData(e.target.value)}
      InputLabelProps={{
        shrink: true,
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
      InputProps={{
        sx: {
          height: '200px',
          overflow: 'auto',
          
        },
      }}
      sx={{
        width: '100%',
        mt: 4, // margem superior para dar espaço
        paddingTop: '10px'
      }}
    />
  </Grid2>
  <Divider/>
        <Button
        variant="contained"
        color="primary"
        onClick={addToSubcollection}
        
      >
        Salvar
      </Button>
      </Card>
        </Box>
    )
}