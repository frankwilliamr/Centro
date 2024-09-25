import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import {useState, useEffect} from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

const mainListItems = [
  { text: 'Analise Geral', icon: <HomeRoundedIcon />, path: '/dashboard' },
  { text: 'Prontuarios', icon: <AnalyticsRoundedIcon />, path: '/prontuarios' },
  { text: 'Cadastro de Internos', icon: <PeopleRoundedIcon />, path:'/cadastro-internos' },
  
];



export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obter a rota atual
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const selectedItem = mainListItems.findIndex((item) => item.path === currentPath);
    setSelectedIndex(selectedItem);
  }, [location]);

  const handleNavigation = (path) => {
    navigate(path); // Navega para a rota correspondente
  };
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={selectedIndex === index}
            onClick={() => handleNavigation(item.path, index)} // Função de navegação ao clicar
            >          
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

     
    </Stack>
  );
}
