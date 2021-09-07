import React from 'react';
import { LoadRoutes } from '../../../router/LoadRoutes';

import './blankLayout.scss';

export const BlankLayout = ({ routes }) => {
  return (
    <div>
      <div className="p-d-flex p-jc-center p-ai-center d-height-100 image-background">
        <LoadRoutes routes={routes} />
      </div>
    </div>
  );
};
