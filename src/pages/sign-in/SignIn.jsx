import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword.jsx';
import getSignInTheme from './theme/getSignInTheme.jsx';
import { Logo } from './CustomIcons.jsx';
import TemplateFrame from './TemplateFrame.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.js';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../firebase.js';
import { getDoc, doc } from 'firebase/firestore';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 20,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}));

export default function SignIn() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignInTheme = createTheme(getSignInTheme(mode));
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [email, setEmail] =React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  
  

  const loginUser = async (e) => {
    e.preventDefault();
    
    try {
        // 1️⃣ Login com o Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Usuário logado:", user);

        // 2️⃣ Consulta ao Firestore para verificar se o usuário está ativo
        const userDocRef = doc(db, "usuarios", user.uid); // Assume que o ID do documento no Firestore é o UID do usuário
        const userDocSnap = await getDoc(userDocRef);
        
        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            
            if (userData.ativo) {
                console.log("Usuário está ativo, redirecionando para o dashboard...");
                
                // 3️⃣ Redirecionar para o dashboard
                navigate('/prontuarios');
            } else {
                console.error("Usuário não está ativo.");
                alert("Sua conta está desativada. Entre em contato com o administrador.");
            }
        } else {
            
            console.error("Usuário não encontrado no Firestore.");
            alert("Conta não cadastrada ou credenciais erradas.");
        }

    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Email ou senha incorreta!');
        console.error("Erro ao fazer login:", error.message);
      }else{console.error("Erro ao fazer login:", error.message);
        alert("Erro ao fazer login: " + error.message);
      }
        
    }
};
  

  return (
    
      <>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Logo/>
                      
           
            <Box
              
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? 'error' : 'primary'}
                  sx={{ ariaLabel: 'email' }}
                />
              </FormControl>
              <FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  
                </Box>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={loginUser}
                sx={{mt: 5}}
              >
                Entrar
              </Button>
              
            </Box>
          </Card>
        </SignInContainer>
        </>
     
  );
}
