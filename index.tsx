import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import { useAuthStore } from '../../stores/authStore';
import Logo from '../../components/common/Logo';
import LoginForm from '../../components/auth/LoginForm';
import SocialLogin from '../../components/auth/SocialLogin';

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    login({ email });
    navigate('/');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    // TODO: Implement Apple login
    console.log('Apple login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Logo className="mb-8" />
        
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Welcome to Motamashi
        </Typography>
        <Typography component="h2" variant="h6" sx={{ mb: 3 }}>
          أهلاً بك في متماشي
        </Typography>

        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleLogin}
        />

        <Divider sx={{ my: 2, width: '100%' }}>
          Or sign in with / أو سجل الدخول باستخدام
        </Divider>

        <SocialLogin
          onGoogleLogin={handleGoogleLogin}
          onAppleLogin={handleAppleLogin}
        />

        <Box sx={{ mt: 3, textAlign: 'center', width: '100%' }}>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            Don't have an account? / ليس لديك حساب؟
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/register')}
          >
            Register / تسجيل جديد
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;