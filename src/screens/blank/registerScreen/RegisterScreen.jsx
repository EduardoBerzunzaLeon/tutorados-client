import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { useForm, Controller } from 'react-hook-form';

import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { InputPassword } from '../../../components/inputPassword/InputPassword';
import { LabelErrorInput } from '../../../components/labelErrorInput/LabelErrorInput';
import classNames from 'classnames';

export const RegisterScreen = () => {
  const defaultValues = {
    email: 'fatima.bernes@gmail.com',
    password: '12345678',
    confirmPassword: '12345678',
    gender: 'M',
    first: 'Fatima',
    last: 'Pacheco',
  };

  // const [data, setData] = useState(null);

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ defaultValues });

  const password = useRef();
  password.current = watch('password', defaultValues.confirmPassword);

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && (
        <LabelErrorInput id={name} message={errors[name].message} />
      )
    );
  };

  const onSubmit = (dataSubmit) => {
    const { first, last, ...dataWithoutName } = dataSubmit;
    const sendData = {
      ...dataWithoutName,
      name: {
        first,
        last,
      },
    };
    // TODO: Do a dispatch register without email send
    console.log(sendData);
  };

  return (
    <Card
      title="Crear cuenta"
      className="p-shadow-5"
      style={{ width: '35rem' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12">
            <label htmlFor="user">Correo</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
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
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Nombre(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <Controller
                name="first"
                control={control}
                rules={{
                  required: 'Nombre es obligatorio.',
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: 'Nombre inválido. P. ej. Eduardo Jesús',
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
            </div>
            {getFormErrorMessage('first')}
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Apellido(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user-edit"></i>
              </span>
              <Controller
                name="last"
                control={control}
                rules={{
                  required: 'Apellido es obligatorio.',
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: 'Nombre inválido. P. ej. Berzunza León',
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
            </div>
            {getFormErrorMessage('last')}
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <div className="p-d-flex">
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-shield"></i>
              </span>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Contraseña es requerida.' }}
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
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <div className="p-d-flex">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
            </div>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: 'Confirmar contraseña es obligatoria.',
                  validate: (value) =>
                    value === password.current ||
                    'Las contraseñas no coinciden',
                }}
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
            {getFormErrorMessage('confirmPassword')}
          </div>
          <div className="p-field ">
            <div className="p-d-flex">
              <label htmlFor="gender">Género</label>
            </div>
            <div className="p-d-inline-flex p-mt-2">
              <div className="p-formgroup-inline">
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Password is required.' }}
                  render={({ field, fieldState }) => (
                    <>
                      <div className="p-field-checkbox">
                        <RadioButton
                          inputId="gender1"
                          value="F"
                          checked={field.value === 'M'}
                          {...field}
                        />
                        <label htmlFor="gender1">Masculino</label>
                      </div>
                      <div className="p-field-checkbox">
                        <RadioButton
                          inputId="gender2"
                          value="M"
                          checked={field.value === 'F'}
                          {...field}
                        />
                        <label htmlFor="gender2">Femenino</label>
                      </div>
                      {getFormErrorMessage('gender')}
                    </>
                  )}
                />
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
