import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { auth } from '../Config/firebase';
import '../styles/General.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      if (userCredential.user.uid) {
        navigate('/');
      }
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  };

  return (
    <div className="register-container ">
      <Form className="form text-center" onSubmit={handleLogin}>
        <h1>Login!</h1>
        <Form.Group controlId="formBasicEmail" className='form-label fs-4 fw-bold'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@example.com"
            className="form-control-custom text-center fs-4"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className='form-label fs-4 fw-bold'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            className="form-control-custom text-center fs-4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button className="mt-2 mb-4 btn-login bg-dark border-dark primary-button" size="lg" type="submit">
          Ingresar
        </Button>
        <p className="forgot-password">
          <Link to="./Home">Olvidaste tu contraseña?</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;