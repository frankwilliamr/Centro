import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function DadosSociais(){
  const [Ocupacao, setOcupacao] = useState ('');  
  const [OutraOcupacao, setOutraOcupacao] = useState('');
    
    const handleChange = (event) => {
        setOcupacao(event.target.value);
      };
      const handleOcupacaoChange = (event) => {
        setOutraOcupacao(event.target.value);

      };
    return (
        <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
           <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="escolaridade" shrink sx={{ fontSize: '1.2rem' }}>Religião</InputLabel>
        
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
          <MenuItem value='Desempregado'>Católico</MenuItem>
          <MenuItem value='Empregado'>Protestante</MenuItem>
          <MenuItem value='Autonomo'>Espírita</MenuItem>
          <MenuItem value='Dona de Casa'>Candomblé</MenuItem>
          <MenuItem value='Estudante'>Evangelico</MenuItem>
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
      </Grid>
          <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="escolaridade" shrink sx={{ fontSize: '1.2rem' }}>Escolaridade</InputLabel>
        
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
          <MenuItem value='Desempregado'>Analfabeto</MenuItem>
          <MenuItem value='Empregado'>1º Grau inclompelto</MenuItem>
          <MenuItem value='Autonomo'>2º Grau inclompelto</MenuItem>
          <MenuItem value='Dona de Casa'>3º Grau inclompelto</MenuItem>
          <MenuItem value='Estudante'>Analfabeto (Escreve o nome)</MenuItem>
          <MenuItem value='EmpregadoFixo'>1º Grau completo</MenuItem>
          <MenuItem value='Empregador'>2º Grau completo</MenuItem>
          <MenuItem value='Mercado Informal'>3º Grau completo</MenuItem>
          
        </Select>

        
      </FormControl>
      </Grid>

        <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Ocupação Atual</InputLabel>
        
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
          <MenuItem value='Desempregado'  >Desempregado</MenuItem>
          <MenuItem value='Empregado'>Empregado</MenuItem>
          <MenuItem value='Autonomo'>Autonomo</MenuItem>
          <MenuItem value='Dona de Casa'>Dona de Casa</MenuItem>
          <MenuItem value='Estudante'>Estudante</MenuItem>
          <MenuItem value='EmpregadoFixo'>Empregado fixo</MenuItem>
          <MenuItem value='Empregador'>Empregador</MenuItem>
          <MenuItem value='Mercado Informal'>Mercado Informal</MenuItem>
          <MenuItem value='Aposentado'>Aposentado</MenuItem>
          <MenuItem value='outro'>Outro</MenuItem>
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
      </Grid>

      <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Vinculo previdênciario</InputLabel>
        
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
          <MenuItem value='Desempregado'  >Não</MenuItem>
          <MenuItem value='outro'>Sim</MenuItem>
        </Select>

        {Ocupacao === 'outro' && (
        <TextField
          label="Quais"
          variant="standard"
          value={OutraOcupacao}
          onChange={handleOcupacaoChange}
          sx={{ marginLeft: 2 }}
        />
      )}
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Benefícios Sociais</InputLabel>
        
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
          <MenuItem value='Desempregado'  >BPC</MenuItem>
          <MenuItem value='bolsa'>Bolsa Família</MenuItem>
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
      </Grid>

      <Grid item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Moradia Atual</InputLabel>
        
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
          <MenuItem value='Desempregado'  >Em situação de rua</MenuItem>
          <MenuItem value='Empregado'>Albergado em abrigos públicos</MenuItem>
          <MenuItem value='Autonomo'>Serviço residencial terapêutico</MenuItem>
          <MenuItem value='Dona de Casa'>Não possui residência fixa</MenuItem>
          <MenuItem value='Estudante'>Moradia regular sozinho</MenuItem>
          <MenuItem value='EmpregadoFixo'>Moradia regular com familiar</MenuItem>
          <MenuItem value='outro'>Outro</MenuItem>
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
      </Grid>

        </Grid>



    );
}