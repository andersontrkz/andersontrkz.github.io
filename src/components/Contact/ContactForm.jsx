import { Box, Button, TextField } from '@material-ui/core'
import { useEffect, useState } from 'react';

export default function ContactForm () {
  const [formContent, setFormContent] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormContent({ ...formContent, [id]: value })
  }

  const checkTextField = () => {
    const { name, subject, message } = formContent;
    const MIN_CHARACTERES = 1;

    if ((name.length >= MIN_CHARACTERES) && (subject.length >= MIN_CHARACTERES) && (message.length >= MIN_CHARACTERES)) {
      return true;
    }
  };

  const checkEmail = () => {
    const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const { email } = formContent;
    return regex.test(email);
  };

  useEffect(() => {
    console.log(checkTextField())
    console.log(checkEmail())
  })

  const disabledButton = checkTextField() && checkEmail();

  return (
    <Box className="contact-box">
      <h1 className="contact-title">Entre em contato</h1>
      <p className="contact-text">
        Tenho interesse em oportunidades, especialmente em projetos ambiciosos e 
        desafiadores. Mas caso você tenha qualquer outra solicitação ou dúvida,
        me envie uma mensagem, e retornarei assim que possível.
      </p>
      <form noValidate autoComplete="off" className="contact-form">
        <TextField id="name" label="Nome" variant="outlined" color="secondary" onChange={handleChange}/>
        <TextField id="email" label="Email" variant="outlined" color="secondary" onChange={handleChange}/>
        <TextField className="contact-form-subject" id="subject" label="Assunto" variant="outlined" color="secondary" onChange={handleChange}/>
        <TextField className="contact-form-message" id="message" label="Mensagem" variant="outlined" color="secondary" onChange={handleChange}/>
        <Button disabled={ !disabledButton } className="contact-form-button" variant="contained" color="secondary">
          Enviar Menssagem
        </Button>
      </form>
    </Box>
  )
}