import React, { useState, useEffect, useRef } from 'react';

import PrimeReact from 'primereact/api';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Routes } from './router/Router';

import './layout/flags/flags.css';
import './layout/layout.scss';
import './app.scss';
import { AppTopbar } from './screens/admin/adminLayout/AppTopBar';
import { Sidebar as SidebarPrime } from 'primereact/sidebar';
import { AppMenu } from './AppMenu';
import { AppProfile } from './AppProfiler';
function App() {
  // active ripple effect
  PrimeReact.ripple = true;
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebar = useRef();

  const history = useHistory();
  let menuClick = false;
  const [layoutMode, setLayoutMode] = useState('static');

  const menu = [
    { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
    {
      label: 'UI Kit',
      icon: 'pi pi-fw pi-sitemap',
      items: [
        {
          label: 'Form Layout',
          icon: 'pi pi-fw pi-id-card',
          to: '/formlayout',
        },
        { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
        {
          label: 'Float Label',
          icon: 'pi pi-fw pi-bookmark',
          to: '/floatlabel',
        },
        {
          label: 'Invalid State',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: '/invalidstate',
        },
        { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
        { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
        { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
        { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
        { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
        { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
        { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
        { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
        { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
        { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
        { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
      ],
    },
    {
      label: 'Utilities',
      icon: 'pi pi-fw pi-globe',
      items: [
        { label: 'Display', icon: 'pi pi-fw pi-desktop', to: '/display' },
        {
          label: 'Elevation',
          icon: 'pi pi-fw pi-external-link',
          to: '/elevation',
        },
        { label: 'Flexbox', icon: 'pi pi-fw pi-directions', to: '/flexbox' },
        { label: 'Icons', icon: 'pi pi-fw pi-search', to: '/icons' },
        { label: 'Grid System', icon: 'pi pi-fw pi-th-large', to: '/grid' },
        { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
        {
          label: 'Typography',
          icon: 'pi pi-fw pi-align-center',
          to: '/typography',
        },
        { label: 'Text', icon: 'pi pi-fw pi-pencil', to: '/text' },
      ],
    },
    {
      label: 'Pages',
      icon: 'pi pi-fw pi-clone',
      items: [
        { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud' },
        {
          label: 'Calendar',
          icon: 'pi pi-fw pi-calendar-plus',
          to: '/calendar',
        },
        { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
        { label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty' },
      ],
    },
    {
      label: 'Menu Hierarchy',
      icon: 'pi pi-fw pi-search',
      items: [
        {
          label: 'Submenu 1',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
              ],
            },
            {
              label: 'Submenu 1.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' },
              ],
            },
          ],
        },
        {
          label: 'Submenu 2',
          icon: 'pi pi-fw pi-bookmark',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
              ],
            },
            {
              label: 'Submenu 2.2',
              icon: 'pi pi-fw pi-bookmark',
              items: [
                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Documentation',
      icon: 'pi pi-fw pi-question',
      command: () => {
        window.location = '#/documentation';
      },
    },
    {
      label: 'View Source',
      icon: 'pi pi-fw pi-search',
      command: () => {
        window.location = 'https://github.com/primefaces/sigma-react';
      },
    },
  ];

  const onSidebarClick = () => {
    menuClick = true;
  };

  const onToggleMenu = (event) => {
    menuClick = true;
    setSidebarActive((prevState) => !prevState);
    event.preventDefault();
  };

  const onMenuItemClick = (event) => {
    if (!event.item.items && layoutMode === 'overlay') {
      setSidebarActive(false);
    }
  };

  const onWrapperClick = (event) => {
    if (!menuClick && layoutMode === 'overlay') {
      setSidebarActive(false);
    }
    menuClick = false;
  };

  const isSidebarVisible = () => {
    return sidebarActive;
  };

  return (
    <div className="App layout-wrapper" onClick={onWrapperClick}>
      <AppTopbar onToggleMenu={onToggleMenu} />

      {/* <CSSTransition
        classNames="layout-sidebar"
        timeout={{ enter: 200, exit: 200 }}
        in={isSidebarVisible()}
        unmountOnExit
      >
        <div
          ref={sidebar}
          className={'layout-sidebar layout-sidebar-dark'}
          onClick={onSidebarClick}
        >
          
        </div>
      </CSSTransition> */}
      <SidebarPrime
        visible={sidebarActive}
        onHide={() => setSidebarActive(false)}
        showCloseIcon={false}
      >
        {/* <div
          className="layout-logo"
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
        >
          <img alt="Logo" src="assets/layout/images/logo-white.svg" />
        </div> */}
        {/* <AppProfile /> */}
        <Router>
          <Route>
            <AppProfile />
            <AppMenu model={menu} onMenuItemClick={onMenuItemClick} />
          </Route>
        </Router>
      </SidebarPrime>

      {/* <Routes /> */}
    </div>
  );
}

export default App;
