import * as React from 'react';

import logoDark from './teste.png';
import logoLigh from './logoDark.png';
import { useTheme } from '@mui/material/styles';


export function Logo() {
  const theme = useTheme();
 
  const logo = theme.palette.mode === 'dark' ? logoDark : logoLigh;
  return(
    
    <img src={logo} alt='' style={{ width: '200px', height: '50px', display: 'flex', justifyContent: 'center', margin: '0 auto' }}/>
  )
}