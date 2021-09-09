import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';

export const ForgotPasswordScren = () => {
  return (
    <Card
      title="Restablece tu contraseña"
      className="p-shadow-5"
      style={{ width: '28rem' }}
    >
      <div className="p-fluid ">
        <div className="p-field">
          <label htmlFor="user">Correo</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </span>
            <InputText placeholder="edu@example.com" keyfilter="email" />
          </div>
        </div>

        <Link to="/reset-password">
          <Button label="Enviar correo de cambio de contraseña" />
        </Link>
      </div>
    </Card>
  );
};
