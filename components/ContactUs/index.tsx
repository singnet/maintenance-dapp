import { Grid, Typography } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from 'snet-ui/TextField';
import axios from 'utils/Axios';
import Alert from '@mui/material/Alert';
import { API_PATHS, SUPPORT_SUBJECT } from 'utils/Constants';
import LoadingButton from 'snet-ui/LoadingButton';
import Container from '@mui/material/Container';

interface ContactUsProps {}

const alertTypes: any = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [submittingForm, setSubmittingForm] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [alertMessage, setAlertMessage] = useState({
    severity: alertTypes.INFO,
    value: '',
  });

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };
  const handleusernameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setUsername(event.target.value);
  };
  const handleMessageChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMessage(event.target.value);
  };

  const sendEmail = async () => {
    try {
      const query = `Maintenance: Message : ${message} . From ${email}`;
      const EMAIL_HOST = process.env.NEXT_PUBLIC_CONTACT_US_MAILER;
      const payload = {
        recipient: EMAIL_HOST,
        message: query,
        subject: { SUPPORT_SUBJECT },
        notification_type: 'support',
      };
      await axios.post(API_PATHS.CONTACT_US, payload);
      setAlertMessage({
        severity: alertTypes.SUCCESS,
        value: 'Your Feedback has been submitted successfully',
      });
    } catch (error: any) {
      setAlertMessage({
        severity: alertTypes.ERROR,
        value: 'Unable to submit your feedback',
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmittingForm(true);
      setMessageError('');
      setEmailError('');
      setAlertMessage({ severity: alertTypes.ERROR, value: '' });
      if (!message) {
        setMessageError('Message should not be empty');
      }
      if (!email) {
        setEmailError('Enter a valid email');
      }
      if (!message || !email) {
        return;
      }
      await sendEmail();
    } finally {
      setSubmittingForm(false);
    }
  };

  return (
    <Box sx={{ mt: 20 }}>
      <Typography align="center" color="primary" variant="h2">
        Contact Us
      </Typography>
      <Container>
        <Grid container sx={{ my: 3 }} spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              color="primary"
              required
              value={username}
              label="Your username (Optional)"
              placeholder="Username"
              onChange={handleusernameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={emailError.trim().length > 0}
              color="primary"
              required
              value={email}
              label="Email"
              placeholder="Enter your email here"
              onChange={handleEmailChange}
              fullWidth
              helperText={emailError}
              variant="filled"
            />
          </Grid>
        </Grid>
        <TextField
          error={messageError.trim().length > 0}
          color="primary"
          required
          value={message}
          label="Message"
          placeholder="Please enter your comments here"
          sx={{ my: 3 }}
          fullWidth
          multiline
          rows={4}
          onChange={handleMessageChange}
          helperText={messageError}
          variant="filled"
        />
        {alertMessage.value.trim() ?
          <Alert severity={alertMessage.severity}>{alertMessage.value}</Alert> : null}
        <Box display="flex" justifyContent="center" sx={{ my: 2 }}>
          <LoadingButton
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            loading={submittingForm}
            sx={{ textTransform: 'capitalize' }}
          >
            Contact
          </LoadingButton>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
