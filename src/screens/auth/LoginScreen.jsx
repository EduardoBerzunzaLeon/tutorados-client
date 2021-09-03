import React from 'react';
import { CardLogin } from '../../components/cardLogin/CardLogin';

import './loginScreen.scss';

export const LoginScreen = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center d-height-100 image-background">
      <CardLogin />
    </div>
  );
};
