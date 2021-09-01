import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';

import './loginScreen.scss';

const CardLogin = () => {
  return (
    <Card
      title="Inicio Sesión"
      className="p-shadow-5"
      style={{ width: '28rem' }}
    >
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="user">Usuario</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="edu@example.com" />
          </div>
          {/* <label htmlFor="user">Usuario</label>
          <InputText id="user" type="text" placeholder="edu@email.com" /> */}
        </div>
        <div className="p-field">
          <div className="p-d-flex p-jc-between">
            <label htmlFor="password">Contraseña</label>
            <a href="?" style={{ textDecoration: 'none' }}>
              ¿Olvidaste la contraseña?
            </a>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-shield"></i>
            </span>
            <Password toggleMask feedback={false} placeholder="******" />
          </div>

          {/* <InputText id="password" type="password" /> */}
        </div>
        <Button label="Ingresar" />
      </div>
      <Divider align="center" type="dashed">
        <span>Ingresar por red social</span>
      </Divider>
      <div className="button-slide">
        <div className="template">
          <Button className="google p-p-0">
            <i className="pi pi-google p-px-2"></i>
            <span className="p-px-3">Google</span>
          </Button>

          <Button className="facebook p-p-0">
            <i className="pi pi-facebook p-px-2"></i>
            <span className="p-px-3">Facebook</span>
          </Button>

          <Button className="twitter p-p-0">
            <i className="pi pi-twitter p-px-2"></i>
            <span className="p-px-3">Twiiter</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const LoginScreen = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center d-height-100 image-background">
      <CardLogin />
    </div>
  );
};

// <section className="box">
//   <div>1</div>
// </section>
