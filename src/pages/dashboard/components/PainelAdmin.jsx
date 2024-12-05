import * as React from 'react';
import { useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    Divider,
    Card,
    Box
  } from '@mui/material';


export default function painelAdmin(){
    const [usuarios, setUsuarios] = useState([
        { id: 1, nome: 'João Silva', email: 'joao@email.com', cargo: 'Desenvolvedor', ativo: true },
        { id: 2, nome: 'Maria Santos', email: 'maria@email.com', cargo: 'Designer', ativo: false },
        { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', cargo: 'Gerente', ativo: true },
      ]);


    return(
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }}}>
        <Card  sx={{margin: 2}}>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
            
          </TableHead>
          
          <TableBody>
            {usuarios.map((usuario) => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.cargo}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={usuario.ativo}
                    onChange={() => handleCheckboxChange(usuario.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      </Box>
      )
        
        
      
    
}