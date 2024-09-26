import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function VinculosSociais(){
  const [Ocupacao, setOcupacao] = useState ('');  
  const [OutraOcupacao, setOutraOcupacao] = useState('');
    
    const handleChange = (event) => {
        setOcupacao(event.target.value);
      };
      const handleOcupacaoChange = (event) => {
        setOutraOcupacao(event.target.value);

      };
    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
           <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="escolaridade" shrink sx={{ fontSize: '1.2rem' }}>Situação Conjugal</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="Parentesco"
          id="Parentesco"
          value={Ocupacao}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Desempregado'>Solteiro</MenuItem>
          <MenuItem value='Empregado'>Separado de fato, não legalmente</MenuItem>
          <MenuItem value='Autonomo'>Viúvo</MenuItem>
          <MenuItem value='Dona de Casa'>Casado ou unido consensualmente</MenuItem>
          <MenuItem value='Estudante'>Divorciado legalmente</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

      
          
        </Select>
        {Ocupacao === 'outro' && (
        <TextField
          label="Outros"
          variant="standard"
          value={OutraOcupacao}
          onChange={handleOcupacaoChange}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>
          <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="escolaridade" shrink sx={{ fontSize: '1.2rem' }}>Com quem o usuário conta</InputLabel>
        
        <Select
          sx={{ width: '30ch'}}
          labelId="Parentesco"
          id="Parentesco"
          value={Ocupacao}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Desempregado'>Com ninguém</MenuItem>
          <MenuItem value='Empregado'>Vizinhos / Amigos</MenuItem>
          <MenuItem value='Autonomo'>Familiares</MenuItem>
          
          <MenuItem value='outro'>Outros</MenuItem>
          
        </Select>
        {Ocupacao === 'outro' && (
        <TextField
          label="Outro"
          variant="standard"
          value={OutraOcupacao}
          onChange={handleOcupacaoChange}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>

        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Capacidades e Habilidades</InputLabel>
        
        <Select
          sx={{ width: '30ch'}}
          labelId="Parentesco"
          id="Parentesco"
          value={Ocupacao}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Desempregado'  >Totalmente Dependente</MenuItem>
          <MenuItem value='Empregado'>Moderadamente grave(rever supervisão constante)</MenuItem>
          <MenuItem value='Autonomo'>Moderado (requer mínimo de supervisão ou estímulo diário)</MenuItem>
          <MenuItem value='Dona de Casa'> Leve (requer mínimo de supervisão ou estímulo)</MenuItem>
          <MenuItem value='Estudante'>Completamente independente </MenuItem>
          
        </Select>

        
      </FormControl>
      </Grid2>

      
        </Grid2>



    );
}