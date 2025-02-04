import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send('service_vk3n05u', 'template_ghuajsf', templateParams, 'lqbk60UFd1119KilR')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent!');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '40px', color: '#fff' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#111', padding: '30px', borderRadius: '8px' }}>
        <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
        <p style={{ textAlign: 'center' }}>
          Got a project waiting to be realized? Let's collaborate and make it happen!
        </p>
        <form
          ref={form}
          noValidate
          onSubmit={sendEmail}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div style={{ display: 'flex', gap: '15px' }}>
            <TextField
              required
              fullWidth
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? 'Please enter your name' : ''}
              InputProps={{
                style: { color: '#000', backgroundColor: '#fff' },
              }}
              InputLabelProps={{
                style: { color: '#000' },
              }}
            />
            <TextField
              required
              fullWidth
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? 'Please enter your email or phone number' : ''}
              InputProps={{
                style: { color: '#000', backgroundColor: '#fff' },
              }}
              InputLabelProps={{
                style: { color: '#000' },
              }}
            />
          </div>
          <TextField
            required
            fullWidth
            label="Message"
            placeholder="Send me any inquiries or questions"
            multiline
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? 'Please enter your message' : ''}
            InputProps={{
              style: { color: '#000', backgroundColor: '#fff' },
            }}
            InputLabelProps={{
              style: { color: '#000' },
            }}
          />
          <Button 
            variant="contained" 
            endIcon={<SendIcon />} 
            type="submit"
            style={{ backgroundColor: '#5000ca', color: '#fff', alignSelf: 'flex-end' }}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
