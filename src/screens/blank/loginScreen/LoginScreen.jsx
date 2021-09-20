import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';

import { SlipButton } from '../../../components/slipButton/SlipButton';
import { useForm } from '../../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../../redux/auth/auth.actions';




export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleInputChange] = useForm({
    email: 'eduardoberzunzal@gmail.com',
    password: '12345678',
  });

  const { email, password } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  const header = (
    <img
      alt="login header"
      src="../assets/images/login-header.jpg"
      onError={(e) =>
        (e.target.src =
          'https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg')
      }
    />
  );

  return (
    <Card
      title="Inicio de sesión"
      className="p-shadow-5"
      style={{ width: '28rem' }}
      header={header}
    >
      <form onSubmit={handleLogin}>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="user">Correo</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="edu@example.com"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="p-field">
            <div className="p-d-flex p-jc-between">
              <label htmlFor="password">Contraseña</label>
              <Link to="forgot-password" style={{ textDecoration: 'none' }}>
                ¿Olvidaste la contraseña?
              </Link>
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-shield"></i>
              </span>
              <Password
                toggleMask
                feedback={false}
                placeholder="******"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-d-flex p-jc-end">
              <Link style={{ textDecoration: 'none' }} to="/register">
                No tengo cuenta
              </Link>
            </div>
          </div>

          <Button type="submit" label="Ingresar" />
        </div>
      </form>
      <Divider align="center" type="dashed">
        <span>Ingresar por red social</span>
      </Divider>

      <SlipButton color="purple" icon="google" label="Google" />
      <SlipButton color="indigo" icon="facebook" label="Facebook" />
      <SlipButton color="blue" icon="twitter" label="Twitter" />
    </Card>
  );
};
