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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import useLanguage from '../../hooks/useLanguage';
import useAuth from '../../hooks/useAuth';
import * as authApi from '../../api/authApi';

export default function Login({ open, onClose }) {
  const language = useLanguage();
  const { userLoginHandler } = useAuth();

  const [values, setValues] = useState({
    email: '',
    password: '',
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

    if (!values.email.trim() || !values.password.trim()) {
      setError('All fields are required.');
      return;
    }

    try {
      setIsSubmitting(true);

      const result = await authApi.login(values.email, values.password);

      userLoginHandler({
        email: values.email,
        accessToken: result.access,
        refreshToken: result.refresh,
      });

      setValues({
        email: '',
        password: '',
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
          elevation={0}
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
            gap: { xs: 2, sm: 2.5 },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 22px 55px rgba(0, 15, 8, 0.35)',
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
            <CloseIcon fontSize="small" />
          </IconButton>

          <Avatar
            sx={{
              width: { xs: 44, sm: 48 },
              height: { xs: 44, sm: 48 },
              borderRadius: 1,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: '0 6px 16px rgba(28, 55, 56, 0.35)',
            }}
          >
            <LockOutlinedIcon fontSize="small" />
          </Avatar>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              letterSpacing: '0.3px',
              textAlign: 'center',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              lineHeight: 1.2,
            }}
          >
            {language.login}
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
              size="small"
              value={values.email}
              onChange={changeHandler}
              autoComplete="email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  backgroundColor: 'base.light',
                  '& fieldset': {
                    borderColor: 'divider',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />

            <TextField
              name="password"
              label={language.password}
              type="password"
              fullWidth
              size="small"
              value={values.password}
              onChange={changeHandler}
              autoComplete="current-password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  backgroundColor: 'base.light',
                  '& fieldset': {
                    borderColor: 'divider',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting}
              sx={{
                mt: 1,
                minHeight: 44,
                py: 1.2,
                borderRadius: 1,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: 'primary.main',
                boxShadow: '0 8px 22px rgba(28, 55, 56, 0.35)',
                '&:hover': {
                  backgroundColor: 'base.mid',
                  boxShadow: '0 10px 30px rgba(28, 55, 56, 0.45)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              {isSubmitting ? 'Loading...' : language.login}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Backdrop>
  );
}