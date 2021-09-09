import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import { MenuProfile } from '../../../components/menuProfile/MenuProfile';
import { MenuSlideContent } from '../../../components/menuSlideContent/MenuSlideContent';
import { MenuTop } from '../../../components/menuTop/MenuTop';

import { LoadRoutes } from '../../../router/LoadRoutes';
import { menu } from '../../../utils/menuElements';

import '../../../layout/flags/flags.css';
import '../../../layout/layout.scss';
import './adminLayout.scss';

export const AdminLayout = ({ routes }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const onMenuItemClick = (event) => {
    if (!event.item.items) {
      setSidebarActive(false);
    }
  };

  const onToggleMenu = (event) => {
    setSidebarActive((prevState) => !prevState);
    event.preventDefault();
  };

  return (
    <div className="layout-wrapper layout-overlay">
      <MenuTop onToggleMenu={onToggleMenu} />
      <Sidebar
        visible={sidebarActive}
        onHide={() => setSidebarActive(false)}
        showCloseIcon={false}
        style={{ backgroundColor: '#3b3e47' }}
      >
        <MenuProfile />
        <MenuSlideContent model={menu} onMenuItemClick={onMenuItemClick} />
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
