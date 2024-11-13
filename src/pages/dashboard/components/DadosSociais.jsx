import * as React from 'react';

import TextField from '@mui/material/TextField';
import Grid2 from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function DadosSociais({ receberReligiao,
  alterarReligiao,
  alterarOutraReligiao,
  receberEscolaridade,
  alterarEscolaridade,
  receberOcupacao,
  alterarOcupacao,
  alterarOutraOcupacao,
  receberPrevidencia,
  alterarPrevidencia,
  alterarOutraPrevidencia,
  receberBeneficios,
  alterarBeneficios,
  alterarOutrosBeneficios,
  receberMoradia,
  alterarMoradia,
  alterarOutraMoradia
}){
 

    
  
     
    return (
        <Grid2 container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="religiao" shrink sx={{ fontSize: '1.2rem' }}>Religião</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="religiao"
          id="religiao"
          value={receberReligiao}
          onChange={(e) => alterarReligiao(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Católico'>Católico</MenuItem>
          <MenuItem value='Protestante'>Protestante</MenuItem>
          <MenuItem value='Espírita'>Espírita</MenuItem>
          <MenuItem value='Candomblé'>Candomblé</MenuItem>
          <MenuItem value='Evangelico'>Evangelico</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

      
          
        </Select>

        {receberReligiao === 'outro' && (
        <TextField
          label="Outros"
          variant="standard"
          
          onChange={(e) => alterarOutraReligiao(e.target.value)}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>
        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="escolaridade" shrink sx={{ fontSize: '1.2rem' }}>Escolaridade</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="escolaridade"
          id="escolaridade"
          value={receberEscolaridade}
          onChange={(e) => alterarEscolaridade(e.target.value)}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Analfabeto'>Analfabeto</MenuItem>
          <MenuItem value='1º Grau inclompelto'>1º Grau inclompelto</MenuItem>
          <MenuItem value='2º Grau inclompelto'>2º Grau inclompelto</MenuItem>
          <MenuItem value='3º Grau inclompelto'>3º Grau inclompelto</MenuItem>
          <MenuItem value='Analfabeto (Escreve o nome)'>Analfabeto (Escreve o nome)</MenuItem>
          <MenuItem value='1º Grau completo'>1º Grau completo</MenuItem>
          <MenuItem value='2º Grau completo'>2º Grau completo</MenuItem>
          <MenuItem value='3º Grau completo'>3º Grau completo</MenuItem>
          
        </Select>

        
      </FormControl>
      </Grid2>

        <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Ocupação Atual</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="ocupacao"
          id="ocupacao"
         value={receberOcupacao}
         onChange={(e) => alterarOcupacao(e.target.value)}
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
        
        {receberOcupacao === 'outro' && (
        <TextField
          label="Outros"
          variant="standard"
          
          onChange={(e) => alterarOutraOcupacao(e.target.value)}
          sx={{ marginLeft: 2 }}
        />
      )}
        
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="previdencia" shrink sx={{ fontSize: '1.2rem' }}>Vinculo previdênciario</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="previdencia"
          id="previdencia"
          value={receberPrevidencia}
          onChange={(e) => alterarPrevidencia(e.target.value)}
       
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Não'  >Não</MenuItem>
          <MenuItem value='sim'>Sim</MenuItem>
        </Select>

        {receberPrevidencia === 'sim' && (
        <TextField
          label="Quais"
          variant="standard"
          
          onChange={(e) => alterarOutraPrevidencia(e.target.value)}
          sx={{ marginLeft: 2 }}
        />)}

      </FormControl>
      </Grid2>
      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="beneficio" shrink sx={{ fontSize: '1.2rem' }}>Benefícios Sociais</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="beneficio"
          id="beneficio"
          value={receberBeneficios}
          onChange={(e) => alterarBeneficios(e.target.value)}
        
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='BPC'>BPC</MenuItem>
          <MenuItem value='Bolsa Família'>Bolsa Família</MenuItem>
          <MenuItem value='outro'>Outros</MenuItem>

        </Select>
        {receberBeneficios === 'outro' && (
        <TextField
          label="Outros"
          variant="standard"
          
          onChange={(e) => alterarOutrosBeneficios(e.target.value)}
          sx={{ marginLeft: 2 }}
        />)}

     
      </FormControl>
      </Grid2>

      <Grid2 item xs={12} sm={6} lg={3}  >
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, flexDirection: 'row'}}
          >
        <InputLabel required id="Ocupacao" shrink sx={{ fontSize: '1.2rem' }}>Moradia Atual</InputLabel>
        
        <Select
          sx={{ width: '20ch'}}
          labelId="Parentesco"
          id="Parentesco"
          value={receberMoradia}
          onChange={(e) => alterarMoradia(e.target.value)}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Em situação de rua'  >Em situação de rua</MenuItem>
          <MenuItem value='Albergado em abrigos públicos'>Albergado em abrigos públicos</MenuItem>
          <MenuItem value='Serviço residencial terapêutico'>Serviço residencial terapêutico</MenuItem>
          <MenuItem value='Não possui residência fixa'>Não possui residência fixa</MenuItem>
          <MenuItem value='Moradia regular sozinho'>Moradia regular sozinho</MenuItem>
          <MenuItem value='Moradia regular com familiar'>Moradia regular com familiar</MenuItem>
          <MenuItem value='outro'>Outro</MenuItem>
        </Select>
        {receberMoradia === 'outro' && (
        <TextField
          label="Outros"
          variant="standard"
          
          onChange={(e) => alterarOutraMoradia(e.target.value)}
          sx={{ marginLeft: 2 }}
        />
      )}
   
      </FormControl>
      </Grid2>

        </Grid2>



    );
}