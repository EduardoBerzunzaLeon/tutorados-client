import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'primereact/sidebar';

import { uiCloseSider } from '../../../redux/ui/ui.actions';
import { selectSiderStatus } from '../../../redux/ui/ui.selectors';

import { MenuProfile } from '../../../components/menuProfile/MenuProfile';
import { MenuSlideContent } from '../../../components/menuSlideContent/MenuSlideContent';
import { MenuTop } from '../../../components/menuTop/MenuTop';
import { LoadRoutes } from '../../../router/LoadRoutes';
import { menu } from '../../../utils/menuElements';

import '../../../layout/flags/flags.css';
import '../../../layout/layout.scss';
import './adminLayout.scss';

export const AdminLayout = ({ routes }) => {
  const siderOpen = useSelector(selectSiderStatus);

  const dispatch = useDispatch();

  return (
    <div className="layout-wrapper layout-overlay">
      <MenuTop />
      <Sidebar
        visible={siderOpen}
        onHide={() => dispatch(uiCloseSider())}
        showCloseIcon={false}
      >
        <MenuProfile />
        <MenuSlideContent model={menu} />
      </Sidebar>
      <div className="layout-main">
        <div className="p-grid">
          <div className="p-col-12">
            <div className="card">
              <LoadRoutes routes={routes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
