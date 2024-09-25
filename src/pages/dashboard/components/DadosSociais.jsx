import * as React from 'react';


export default function DadosSociais(){
    const handleChange = (event) => {
        setParentesco(event.target.value);
      };

    return (
        <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Grid item xs={12} sm={6} lg={3} >
      <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Religião</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pai</MenuItem>
          <MenuItem value={20}>Mãe</MenuItem>
          <MenuItem value={30}>Avô/Avó</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={12} sm={6} lg={3} >
      <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Escolaridade</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pai</MenuItem>
          <MenuItem value={20}>Mãe</MenuItem>
          <MenuItem value={30}>Avô/Avó</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} >
      <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}
          >
        <InputLabel required id="Parentesco" shrink sx={{ fontSize: '1.2rem' }}>Ocupação Atual</InputLabel>
        
        <Select
          
          labelId="Parentesco"
          id="Parentesco"
          value={Parentesco}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Pai</MenuItem>
          <MenuItem value={20}>Mãe</MenuItem>
          <MenuItem value={30}>Avô/Avó</MenuItem>
        </Select>
      </FormControl>
      </Grid>
        </Grid>



    );
}