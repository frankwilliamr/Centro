const express = require('express');
const fs = require('fs');
const cors = require('cors'); 
const path = require('path');
const app = express();
const port = 3000;
const sgMail = require('@sendgrid/mail');
app.use(cors());
// Middleware para interpretar JSON
app.use(express.json());


// Caminho para o arquivo JSON
const jsonFilePath = path.join(__dirname, 'prontuarios.json');

// Função para ler os dados do arquivo JSON
const lerDados = () => {
  const data = fs.readFileSync(jsonFilePath);
  return JSON.parse(data);
};

// Função para escrever dados no arquivo JSON
const salvarDados = (dados) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(dados, null, 2));
};

// Rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API com arquivo JSON funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/sendEmail', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).send('E-mail e senha são necessários.');
  }

  const msg = {
    to: email,
    from: 'frankwilliamr@gmail.com', // Substitua pelo seu e-mail verificado no SendGrid
    subject: 'Bem-vindo à nossa plataforma!',
    text: `Olá, bem-vindo à nossa plataforma! Aqui estão suas credenciais de acesso:
           \nE-mail: ${email}
           \nSenha: ${senha}
           \nPor favor, altere sua senha após o primeiro login.`,
    html: `
      <h1>Bem-vindo à nossa plataforma!</h1>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Senha:</strong> ${senha}</p>
      <p>Por favor, altere sua senha após o primeiro login.</p>
    `,
  };

  try {
    // Enviar o e-mail
    await sgMail.send(msg);
    res.status(200).send('E-mail enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send('Erro ao enviar o e-mail');
  }
});
