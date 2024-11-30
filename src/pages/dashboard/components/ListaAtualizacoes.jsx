import * as React from 'react';
import { DataGrid, GridTableRowsIcon } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase';
import axios from 'axios';
import { Box, Grid2, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";


export default function listaAtualizacoes() {
  const [rows, setRows] = useState([]);
  const { id, idAtt } = useParams();
  const navigate = useNavigate();
  const [nome, setNome] = React.useState('');


  const addAtualizacao = () => {
    navigate(`/atualizacao/${id}/nova/novo`, {
      state: { nome: nome }, // Passando o estado 'nome'
    });
      
  }
  
  useEffect(() => {
    const fetchAtualizacoes = async () => {
      try {
        const internoDocRef = doc(db, 'internos', id);

        const docSnap = await getDoc(internoDocRef);
        if(docSnap.exists()){
          const data = docSnap.data();
          setNome(data.nome)
        }
    // Referência à subcoleção "atualizacoes" dentro do documento
    const atualizacoesCollection = collection(internoDocRef, 'atualizacao');
    
    // Obtém os documentos da subcoleção
    const atualizacoesSnapshot = await getDocs(atualizacoesCollection);
    
    // Mapeia os dados da subcoleção
    const atualizacoesList = atualizacoesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    // Define os dados no estado
    setRows(atualizacoesList);
        
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    fetchAtualizacoes();
  }, []);
  

  const columns = [
    
    { field: 'nome', headerName: 'Nome',minWidth: 200, flex: 1.5, 
      renderCell: (params) => (
        // <a href={`/atualizacao/${id}/${params.row.id}`}>{params.row.titulo}</a> 
        <Link
        to={`/atualizacao/${id}/${params.row.id}`}
        state={{ nome: nome }} // Passa o state como um objeto
    >
      {params.row.titulo}
    </Link>
      )
    },
    { field: 'data', headerName: 'Ultimo atendimento', minWidth: 80, flex: 1},
  ];

  return (
    <Box sx={{margin: 3  }}>
      <Grid2  fullwidth >
      <Grid2 container sx={{ justifyContent: 'space-between'}}>
      <Grid2 item  xs={12} sm={6}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Atualizações de {nome}
        
       </Typography>
        </Grid2>
      <Grid2 sx={{mb: 2, display: 'flex', justifyContent: 'flex-end'}}>
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={addAtualizacao}
      >
        <AddIcon />
      </IconButton>
      </Grid2>
      </Grid2>
    <Grid2>
    <DataGrid
      autoHeight
      
      rows={rows}
      columns={columns}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      pageSizeOptions={[10, 20, 50]}
      disableColumnResize
      density="compact"
      slotProps={{
        filterPanel: {
          filterFormProps: {
            logicOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
          },
        },
      }}
    />
    </Grid2>
       
    </Grid2>
    </Box>
  );
}
