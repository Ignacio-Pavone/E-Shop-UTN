import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { firebaseApp,  auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth ,data.email, data.password);
      await firebaseApp?.firestore().collection('users').add({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
      
    } catch (error) {
      console.log(error)
      setError(error.message);
    } finally {
      setLoading(false);
      navigate('/login'); /*Navegar a /login despues de terminar el registro*/
    }
    
  };

  return (
    <div className="register-container ">
      <Form onSubmit={handleSubmit(onSubmit)} className="form text-center">
        <h3 className="text-center">Registro</h3>
        <Form.Group controlId="firstName" className='form-label fs-4 fw-bold'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" {...register('firstName', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.firstName && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="lastName" className='form-label fs-4 fw-bold'>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido" {...register('lastName', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.lastName && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="email" className='form-label fs-4 fw-bold'>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" {...register('email', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.email && <p className="error">This field is required</p>}
        </Form.Group>

        <Form.Group controlId="password" className='form-label fs-4 fw-bold'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} className="form-control-custom text-center fs-4" />
          {errors.password && <p className="error">This field is required</p>}
        </Form.Group>

        {error && <p className="error">{error}</p>}

        <Button variant="success" className="mt-2 mb-4 btn-login bg-dark border-dark" size="lg" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;

