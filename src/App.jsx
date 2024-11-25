import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaAtualizacoes from './pages/dashboard/components/ListaAtualizacoes';
import Atualizacao from './pages/dashboard/components/Atualizacao'
import Paciente from './pages/dashboard/Paciente';
import SignIn from './pages/sign-in/SignIn';
import DashBoard from './pages/dashboard/Dashboard';
import Prontuarios from './pages/dashboard/Prontuarios';
import Cadastro from './pages/dashboard/Cadastro';
import getDashboardTheme from './pages/dashboard/theme/getDashboardTheme';
import TemplateFrame from './pages/dashboard/TemplateFrame';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
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
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  return (
    <BrowserRouter>
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
        <CssBaseline enableColorScheme />
          
        <Routes>
          <Route path='/paciente/listaAtualizacao/:id' element={<ListaAtualizacoes/>}/>
          <Route path='/atualizacao/:id/:idAtt/:adicionar?' element={<Atualizacao/>}/>
          <Route path='/pacientes/:id' element={ <Paciente/>}/>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/prontuarios" element={<Prontuarios />} />
          <Route path="/cadastro-internos" element={<Cadastro />} />
        </Routes>
      </ThemeProvider>
      </TemplateFrame>
    </BrowserRouter>
  );
}