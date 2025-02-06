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

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');
  
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    if (form.current) {
      emailjs.sendForm('service_vk3n05u', 'template_ghuajsf', form.current, 'RhnjMHYUy2Cc077Dq')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
          form.current?.reset(); // Reset form fields
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please check your email address and try again.');
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
              name="from_name"  // Matches EmailJS template variable
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
              name="from_email" // Matches EmailJS template variable
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
            name="message" // Matches EmailJS template variable
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
