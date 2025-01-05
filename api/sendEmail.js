import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log('Método recebido:', req.method);
  if (req.method !== 'POST') {
    console.log('Método não permitido');
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, senha } = req.body;
  console.log('Dados recebidos:', { email, senha });

  if (!email || !senha) {
    console.log('Faltando e-mail ou senha');
    return res.status(400).json({ message: 'E-mail e senha são necessários.' });
  }

  const msg = {
    to: email,
    from: 'isnuc3@gmail.com', // Substitua pelo seu e-mail verificado no SendGrid
    subject: 'Bem-vindo à comunidade terapêutica Pedra Viva!',
    text: `Olá, bem-vindo à comunidade terapêutica Pedra Viva! Aqui estão suas credenciais de acesso:
           \nE-mail: ${email}
           \nSenha: ${senha}
           \nPor favor, altere sua senha após o primeiro login.`,
    html: `
      <h1>bem-vindo à comunidade terapêutica Pedra Viva!</h1>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Senha:</strong> ${senha}</p>
      <p>Por favor, altere sua senha após o primeiro login.</p>
    `,
  };

  try {
    console.log('Enviando e-mail...');
    await sgMail.send(msg);
    console.log('E-mail enviado com sucesso!');
    return res.status(200).json({ message: 'E-mail enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    return res.status(500).json({ message: 'Erro ao enviar o e-mail', error: error.message });
  }
}
