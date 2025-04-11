import * as React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ListaAtualizacoes from './pages/dashboard/components/ListaAtualizacoes';
import Atualizacao from './pages/dashboard/components/Atualizacao'
import Paciente from './pages/dashboard/Paciente';
import SignIn from './pages/sign-in/SignIn';
import DashBoard from './pages/dashboard/Dashboard';
import Prontuarios from './pages/dashboard/Prontuarios';
import Cadastro from './pages/dashboard/Cadastro';
import CadastroUsuarios from './pages/dashboard/components/CadastroUsuarios';
import getDashboardTheme from './pages/dashboard/theme/getDashboardTheme';
import TemplateFrame from './pages/dashboard/TemplateFrame';
import { createTheme, ThemeProvider, alpha} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CircularProgress, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAuth } from './pages/sign-in/Autenticacao';

import ProtectedRoute from './pages/sign-in/ProtecaoRota';


export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [isThemeLoaded, setIsThemeLoaded] = React.useState(false);
  const {loading} = useAuth();
  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
    
      setIsThemeLoaded(true); // Atualiza o estado para indicar que o tema foi "carregado"
    
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
    localStorage.setItem('themeMode', newMode);
  };
  
  
 
  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          backgroundColor: '#fff' // Cor de fundo enquanto carrega, pode ser o fundo claro
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <HashRouter>
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
        
        <Routes>
          <Route path='/login' element={<SignIn/>} />
          <Route path='/paciente/listaAtualizacao/:id'  element={<ProtectedRoute><ListaAtualizacoes/></ProtectedRoute>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuarios/>}/>
          <Route path='/atualizacao/:id/:idAtt?/:adicionar?' element={<ProtectedRoute><Atualizacao/></ProtectedRoute>}/>
          <Route path='/pacientes/:id' element={ <ProtectedRoute><Paciente/></ProtectedRoute>}/>
          <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute> } />
          <Route path="/prontuarios" element={<ProtectedRoute><Prontuarios /></ProtectedRoute>} />
          <Route path="/cadastro-internos" element={<ProtectedRoute><Cadastro /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </ThemeProvider>
      </TemplateFrame>
    </HashRouter>
    
  );
}