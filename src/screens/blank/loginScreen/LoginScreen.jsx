import React from 'react';
import { Link } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';

import { useDispatch } from 'react-redux';
import { emailSignInStart } from '../../../redux/auth/auth.actions';
import { SlipButton } from '../../../components/slipButton/SlipButton';
import classNames from 'classnames';
import { LabelErrorInput } from '../../../components/labelErrorInput/LabelErrorInput';
import { InputPassword } from '../../../components/inputPassword/InputPassword';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const defaultValues = {
    email: 'eduardoberzunzal@gmail.com',
    password: '12345678',
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  const onSubmit = ({ email, password }) =>
    dispatch(emailSignInStart({ email, password }));

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <LabelErrorInput id={name} message={errors[name].message} />
      )
    );
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
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <div className="p-field">
          <label
            htmlFor="user"
            className={classNames({ 'p-error': errors.email })}
          >
            Correo
          </label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Correo es obligatorio.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message:
                    'Correo Electrónico inválido. P. ej. ejemplo@email.com',
                },
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  autoFocus
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
          </div>
          {getFormErrorMessage('email')}
        </div>
        <div className="p-field">
          <div className="p-d-flex p-jc-between">
            <label
              htmlFor="password"
              className={classNames({ 'p-error': errors.password })}
            >
              Contraseña
            </label>
            <Link to="forgot-password" style={{ textDecoration: 'none' }}>
              ¿Olvidaste la contraseña?
            </Link>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-shield"></i>
            </span>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required.' }}
              render={({ field, fieldState }) => (
                <InputPassword
                  id={field.name}
                  feedback={false}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
          </div>
          {getFormErrorMessage('password')}
          <div className="p-d-flex p-jc-end">
            <Link style={{ textDecoration: 'none' }} to="/register">
              No tengo cuenta
            </Link>
          </div>
        </div>

        <Button type="submit" label="Ingresar" />
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
