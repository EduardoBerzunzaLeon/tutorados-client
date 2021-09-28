import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { InputPassword } from '../../../components/inputPassword/InputPassword';
import { useForm } from '../../../hooks/useForm';
import { LabelErrorInput } from '../../../components/labelErrorInput/LabelErrorInput';

export const RegisterScreen = () => {
  const [errors, setErrors] = useState({
    emailError: null,
    passwordError: null,
    genderError: null,
    firstError: null,
    lastError: null,
  });

  const [formNameValues, handleInputNameChange] = useForm({
    first: 'Fatima',
    last: 'Pacheco',
  });

  const [formRegisterValues, handleInputChange] = useForm({
    email: 'fatima.bernes@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
    gender: 'M',
  });

  const { email, password, confirmPassword, gender } = formRegisterValues;
  const { first, last } = formNameValues;

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors({
      ...errors,
      emailError: 'valioVerga',
    });
    console.log(formRegisterValues);
    console.log(formNameValues);
  };

  return (
    <Card
      title="Crear cuenta"
      className="p-shadow-5"
      style={{ width: '35rem' }}
    >
      <form onSubmit={handleRegister}>
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12">
            <label htmlFor="user">Correo</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <InputText
                placeholder="edu@example.com"
                keyfilter="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className={!!errors.emailError && 'p-invalid'}
                required
              />
            </div>
            {!!errors.emailError && (
              <LabelErrorInput id="email-help" message={errors.emailError} />
            )}
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Nombre(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="eduardo"
                name="first"
                value={first}
                onChange={handleInputNameChange}
                required
              />
            </div>
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Apellido(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user-edit"></i>
              </span>
              <InputText
                placeholder="berzunza"
                name="last"
                value={last}
                onChange={handleInputNameChange}
              />
            </div>
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <div className="p-d-flex">
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-shield"></i>
              </span>
              <InputPassword
                name="password"
                value={password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <div className="p-d-flex">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <InputPassword
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="p-field ">
            <div className="p-d-flex">
              <label htmlFor="confirmPassword">Género</label>
            </div>
            <div className="p-d-inline-flex p-mt-2">
              <div className="p-formgroup-inline">
                <div className="p-field-checkbox">
                  <RadioButton
                    inputId="gender1"
                    name="gender"
                    value="M"
                    onChange={handleInputChange}
                    checked={gender === 'M'}
                  />
                  <label htmlFor="gender1">Masculino</label>
                </div>
                <div className="p-field-checkbox">
                  <RadioButton
                    inputId="gender2"
                    name="gender"
                    value="F"
                    onChange={handleInputChange}
                    checked={gender === 'F'}
                  />
                  <label htmlFor="gender2">Femenino</label>
                </div>
              </div>
            </div>
          </div>
          <Button label="Registrar me" />
        </div>
      </form>
      <div className="p-d-flex p-jc-end">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Ya tengo una cuenta
        </Link>
      </div>
    </Card>
  );
};
