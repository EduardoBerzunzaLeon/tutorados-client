import { AdminLayout } from '../../screens/admin/adminLayout/AdminLayout';
import { BlankLayout } from '../../screens/blank/blankLayout/BlankLayout';

import { HomeScreen } from '../../screens/admin/home/HomeScreen';
import { LoginScreen } from '../../screens/blank/loginScreen/LoginScreen';

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    exact: false,
    routes: [
      {
        path: '/admin',
        component: HomeScreen,
        exact: true,
      },
    ],
  },
  {
    path: '/',
    component: BlankLayout,
    exact: false,
    routes: [
      {
        path: '/login',
        component: LoginScreen,
        exact: true,
      },
    ],
  },
];

export { routes };
