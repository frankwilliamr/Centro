
// const sgMail = require('@sendgrid/mail');



// export async function enviarEmail(email, senha) {
//     const msg = {
//       to: email, 
//       from: 'frankwilliamr@gmail.com', 
//       subject: 'Bem-vindo à nossa plataforma!',
//       text: `Olá, bem-vindo à nossa plataforma! Aqui estão suas credenciais de acesso: 
//             \nE-mail: ${email} 
//             \nSenha: ${senha} 
//             \nPor favor, altere sua senha após o primeiro login.`,
//       html: `
//         <h1>Bem-vindo à nossa plataforma!</h1>
//         <p><strong>E-mail:</strong> ${email}</p>
//         <p><strong>Senha:</strong> ${senha}</p>
//         <p>Por favor, altere sua senha após o primeiro login.</p>
//       `,
//     };
  
//     try {
//       await sgMail.send(msg);
//       console.log('E-mail enviado com sucesso para:', email);
//     } catch (erro) {
//       console.error('Erro ao enviar o e-mail:', erro);
//       throw erro;
//     }
//   }