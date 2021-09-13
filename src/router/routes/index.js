import { AdminLayout } from '../../screens/admin/adminLayout/AdminLayout';
import { BlankLayout } from '../../screens/blank/blankLayout/BlankLayout';

import { HomeScreen } from '../../screens/admin/home/HomeScreen';
import { LoginScreen } from '../../screens/blank/loginScreen/LoginScreen';
import { RegisterScreen } from '../../screens/blank/registerScreen/RegisterScreen';
import { ForgotPasswordScren } from '../../screens/blank/forgotPasswordScreen/ForgotPasswordScreen';
import { ResetPasswordScreen } from '../../screens/blank/resetPasswordScreen/ResetPasswordScreen';

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
        path: '/',
        component: LoginScreen,
        exact: true,
      },
      {
        path: '/login',
        component: LoginScreen,
        exact: true,
      },
      {
        path: '/register',
        component: RegisterScreen,
        exact: true,
      },
      {
        path: '/forgot-password',
        component: ForgotPasswordScren,
        exact: true,
      },
      {
        path: '/reset-password',
        component: ResetPasswordScreen,
        exact: true,
      },
    ],
  },
];

export { routes };
