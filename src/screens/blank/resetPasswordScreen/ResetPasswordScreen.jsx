import React from 'react';

import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

import { InputPassword } from '../../../components/inputPassword/InputPassword';

export const ResetPasswordScreen = () => {
  return (
    <Card
      title="Cambia tu contraseña"
      className="p-shadow-5"
      style={{ width: '28rem' }}
    >
      <div className="p-fluid ">
        <div className="p-field ">
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
        <div className="p-field ">
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
        <Link to="/admin">
          <Button label="Restablecer contraseña" />
        </Link>
      </div>
    </Card>
  );
};
