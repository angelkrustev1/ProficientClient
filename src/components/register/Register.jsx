import { useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Backdrop,
} from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import useLanguage from '../../hooks/useLanguage';
import useAuth from '../../hooks/useAuth';
import * as authApi from '../../api/authApi';

export default function Register({ open, onClose }) {
  const language = useLanguage();
  const { userLoginHandler } = useAuth();

  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setError('');

    if (!values.email.trim() || !values.password.trim() || !values.repeatPassword.trim()) {
      setError('All fields are required.');
      return;
    }

    if (values.password !== values.repeatPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);

      await authApi.register(values.email, values.password);
      const loginResult = await authApi.login(values.email, values.password);

      userLoginHandler({
        email: values.email,
        accessToken: loginResult.access,
        refreshToken: loginResult.refresh,
      });

      setValues({
        email: '',
        password: '',
        repeatPassword: '',
      });

      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        zIndex: 'modal',
        bgcolor: 'rgba(0, 0, 0, 0.6)',
        px: 2,
        py: { xs: 2, sm: 3 },
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: '100%',
          maxWidth: 420,
        }}
      >
        <Paper
          elevation={12}
          sx={{
            position: 'relative',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            px: { xs: 2.5, sm: 4 },
            py: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 1.75, sm: 2 },
            bgcolor: 'background.paper',
            color: 'text.primary',
            borderRadius: 1,
            boxSizing: 'border-box',
          }}
        >
          <IconButton
            size="small"
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'text.secondary',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Avatar
            sx={{
              bgcolor: 'action.selected',
              color: 'primary.main',
              width: { xs: 44, sm: 48 },
              height: { xs: 44, sm: 48 },
            }}
          >
            <PersonAddAltIcon />
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              letterSpacing: '0.3px',
              textAlign: 'center',
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              lineHeight: 1.2,
            }}
          >
            {language.register}
          </Typography>

          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 0.5,
            }}
          >
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              name="email"
              label={language.email}
              type="email"
              fullWidth
              required
              size="small"
              value={values.email}
              onChange={changeHandler}
              autoComplete="email"
            />

            <TextField
              name="password"
              label={language.password}
              type="password"
              fullWidth
              required
              size="small"
              value={values.password}
              onChange={changeHandler}
              autoComplete="new-password"
            />

            <TextField
              name="repeatPassword"
              label={language.repeatPassword}
              type="password"
              fullWidth
              required
              size="small"
              value={values.repeatPassword}
              onChange={changeHandler}
              autoComplete="new-password"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 1,
                minHeight: 44,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              {isSubmitting ? 'Loading...' : language.register}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}