import * as React from 'react';

import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function VinculosSociais({
  estadoCivil,
  outroEstadoCivil,
  ajuda,
  outraAjuda,
  capacidade,
  alterarEstadoCivil,
  alterarOutroEstadoCivil,
  alterarAjuda,
  alterarOutraAjuda,
  alterarCapacidade,

}){
  
    
    
    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{ minWidth: 120, flexDirection: 'row', padding: '10px'}}
          >
        <InputLabel  id="estadoCivil" shrink sx={{ fontSize: '0.8rem' }}>Situação Conjugal</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="estadoCivil"
          id="estadoCivil"
          value={estadoCivil}
          onChange={(e) => alterarEstadoCivil(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Solteiro'>Solteiro</MenuItem>
          <MenuItem value='Separado de fato, não legalmente'>Separado de fato, não legalmente</MenuItem>
          <MenuItem value='Viúvo'>Viúvo</MenuItem>
          <MenuItem value='Dona deCasado ou unido consensualmente'>Casado ou unido consensualmente</MenuItem>
          <MenuItem value='Divorciado legalmente'>Divorciado legalmente</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

      
          
        </Select>
        {estadoCivil === 'outro' && (
        <TextField
          
          
          value={outroEstadoCivil}
          onChange={(e) => alterarOutroEstadoCivil(e.target.value)}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>
          <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{  flexDirection: 'row', padding: '10px'}}
          >
        <InputLabel   shrink sx={{ fontSize: '0.8rem' }}>Com quem o usuário conta</InputLabel>
        
        <Select
          sx={{ width: '30ch'}}
          
          value={ajuda}
          onChange={(e) => alterarAjuda(e.target.value)}
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
          
          
          value={outraAjuda}
          onChange={(e) => alterarOutraAjuda(e.target.value)}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>

        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth  sx={{  flexDirection: 'row', padding: '10px'}}
          >
        <InputLabel  id="capacidade" shrink sx={{ fontSize: '0.8rem' }}>Capacidades e Habilidades</InputLabel>
        
        <Select
          sx={{ width: '35ch'}}
          labelId="capacidade"
          id="capacidade"
          value={capacidade}
          onChange={(e) => alterarCapacidade(e.target.value)}
         
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



    );
}