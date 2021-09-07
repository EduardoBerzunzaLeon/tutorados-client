import React from 'react';

import MainMenu from '../../../components/mainMenu/MainMenu';
import { LoadRoutes } from '../../../router/LoadRoutes';

import './adminLayout.scss';

export const AdminLayout = ({ routes }) => {
  return (
    <div>
      <MainMenu />
      <LoadRoutes routes={routes} />
    </div>
  );
};
