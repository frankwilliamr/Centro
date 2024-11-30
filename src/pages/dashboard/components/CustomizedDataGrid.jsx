import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';
import axios from 'axios';


export default function CustomizedDataGrid() {
  const [rows, setRows] = useState([]);

  
  
  useEffect(() => {
    const fetchProntuarios = async () => {
      try {
        // Referência à coleção "prontuarios"
        const prontuariosCollection = collection(db, 'internos');
        // Obtém os documentos
        const prontuariosSnapshot = await getDocs(prontuariosCollection);
        // Mapeia os dados
        const prontuariosList = prontuariosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Define os dados no estado
        setRows(prontuariosList);
        
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };

    fetchProntuarios();
  }, []);
  

  const columns = [
    {field: 'NumeroProntuario', headerName: 'Nº Prontuario', minWidth: 50, flex: 0.4, align: 'center'},
    { field: 'nome', headerName: 'Nome',minWidth: 200, flex: 1.5, 
      renderCell: (params) => (
        <a href={`/pacientes/${params.row.id}`}>{params.row.nome}</a> // Redireciona para a página de detalhes
      )
    },
    { field: 'ultimoAtendimento', headerName: 'Ultimo atendimento', minWidth: 80, flex: 1},
  ];
  return (
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
  );
}
