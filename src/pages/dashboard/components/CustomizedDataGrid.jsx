import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function CustomizedDataGrid() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setRows(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados', error);
      });
  }, []);

  const columns = [
    
    { field: 'title', headerName: 'Nome',minWidth: 200, flex: 1.5, 
      renderCell: (params) => (
        <a href={`/detalhes/${params.row.id}`}>{params.row.title}</a> // Redireciona para a página de detalhes
      )
    },
    { field: 'id', headerName: 'Ultimo atendimento', minWidth: 80, flex: 1},
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
