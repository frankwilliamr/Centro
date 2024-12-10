import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { auth } from '../../../../firebase';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import { signOut } from "firebase/auth";
import { useAuth } from '../../sign-in/Autenticacao';
import { sendPasswordResetEmail } from 'firebase/auth';
function SideMenuMobile({ open, toggleDrawer }) {
  const { nome, email, loading } = useAuth();

  const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("Usuário desconectado.");
    } catch (error) {
        console.error("Erro ao desconectar:", error.message);
    }
};
const handleRedefinirSenha = async () => {
     
  
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Um e-mail de redefinição foi enviado para o seu email.');
  } catch (error) {
    console.log(`Erro ao enviar e-mail: ${error.message}`);
  }
};
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
          >
            
            <Typography component="p" variant="h6">
              {nome}
            </Typography>
          </Stack>
          
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        
        <Stack sx={{ p: 2 }}>
        <Button variant="outlined" fullWidth onClick={handleRedefinirSenha} sx={{mb: 1}}>
            Alterar Senha
          </Button>
          <Button variant="outlined" fullWidth onClick={logoutUser} startIcon={<LogoutRoundedIcon />}>
            Sair
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}

SideMenuMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};

export default SideMenuMobile;
