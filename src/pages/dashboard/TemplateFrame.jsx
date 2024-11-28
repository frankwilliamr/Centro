import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuButton from './components/MenuButton';
import ToggleColorMode from './components/ToggleColorMode';
import getDashboardTheme from './theme/getDashboardTheme';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SideMenuMobile from './components/SideMenuMobile';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  display: 'flex',
  alignItems: 'center',
  
  justifyContent: 'space-between',
  flexShrink: 0,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
  flex: '0 0 auto',
}));

function TemplateFrame({
  showCustomTheme,
  toggleCustomTheme,
  mode,
  toggleColorMode,
  children,
}) {
 
  const dashboardTheme = createTheme(getDashboardTheme(mode));

  
  
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column',}}>
      
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: { xs: 'none', md: 'block' },
              [`& .${drawerClasses.paper}`]: {
                backgroundColor: 'background.paper',
              },
              position: 'relative',
              
              justifyContent: 'space-between',
              width: '100%',
              p: '8px 12px',
            }}
          >
           
         
            <Box sx={{ display: 'flex', gap: 1, margin: '0 auto',  alignItems: 'flex-start', justifyContent: 'center'}}>
           
              <ToggleColorMode
                sx={{display: 'flex'}}
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
              />
            </Box>
                                    
          </Toolbar>
        </StyledAppBar>
        
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  showCustomTheme: PropTypes.bool.isRequired,
  toggleColorMode: PropTypes.func.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default TemplateFrame;
