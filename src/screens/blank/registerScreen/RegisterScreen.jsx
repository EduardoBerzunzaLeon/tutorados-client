import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { InputPassword } from '../../../components/inputPassword/InputPassword';

export const RegisterScreen = () => {
  const [city, setCity] = useState(null);

  return (
    <Card
      title="Crear cuenta"
      className="p-shadow-5"
      style={{ width: '35rem' }}
    >
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label htmlFor="user">Correo</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </span>
            <InputText placeholder="edu@example.com" keyfilter="email" />
          </div>
        </div>
        <div className="p-field p-col-12 p-sm-6">
          <label htmlFor="user">Nombre(s)</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="eduardo" />
          </div>
        </div>
        <div className="p-field p-col-12 p-sm-6">
          <label htmlFor="user">Apellido(s)</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user-edit"></i>
            </span>
            <InputText placeholder="berzunza" />
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
            <InputPassword />
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
            <InputPassword />
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
                  inputId="city1"
                  name="city"
                  value="masculino"
                  onChange={(e) => setCity(e.value)}
                  checked={city === 'masculino'}
                />
                <label htmlFor="city7">Masculino</label>
              </div>
              <div className="p-field-checkbox">
                <RadioButton
                  inputId="city2"
                  name="city"
                  value="femenino"
                  onChange={(e) => setCity(e.value)}
                  checked={city === 'femenino'}
                />
                <label htmlFor="city8">Femenino</label>
              </div>
              <div className="p-field-checkbox">
                <RadioButton
                  inputId="city2"
                  name="city"
                  value="companiere"
                  onChange={(e) => setCity(e.value)}
                  checked={city === 'companiere'}
                />
                <label htmlFor="city8">Compañere</label>
              </div>
            </div>
          </div>
        </div>
        <Button label="Registrar me" />
      </div>

      <div className="p-d-flex p-jc-end">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Ya tengo una cuenta
        </Link>
      </div>
    </Card>
  );
};
