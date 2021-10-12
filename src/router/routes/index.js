import { AdminLayout } from '../../screens/admin/adminLayout/AdminLayout';
import { BlankLayout } from '../../screens/blank/blankLayout/BlankLayout';

import { HomeScreen } from '../../screens/admin/home/HomeScreen';
import { LoginScreen } from '../../screens/blank/loginScreen/LoginScreen';
import { RegisterScreen } from '../../screens/blank/registerScreen/RegisterScreen';
import { ForgotPasswordScren } from '../../screens/blank/forgotPasswordScreen/ForgotPasswordScreen';
import { ResetPasswordScreen } from '../../screens/blank/resetPasswordScreen/ResetPasswordScreen';
import { ActivateScreen } from '../../screens/blank/activateScreen/ActivateScreen';

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    exact: false,
    private: true,
    routes: [
      {
        path: '/admin',
        component: HomeScreen,
        exact: true,
        private: true,
      },
    ],
  },
  {
    path: '/',
    component: BlankLayout,
    exact: false,
    private: false,
    routes: [
      {
        path: '/',
        component: LoginScreen,
        exact: true,
        private: false,
      },
      {
        path: '/login',
        component: LoginScreen,
        exact: true,
        private: false,
      },
      {
        path: '/register',
        component: RegisterScreen,
        exact: true,
        private: false,
      },
      {
        path: '/activate/:id',
        component: ActivateScreen,
        exact: true,
        private: false,
      },
      {
        path: '/forgot-password',
        component: ForgotPasswordScren,
        exact: true,
        private: false,
      },
      {
        path: '/reset-password/:token',
        component: ResetPasswordScreen,
        exact: true,
        private: false,
      },
      {
        path: '*',
        component: LoginScreen,
        exact: true,
        private: false,
      },
    ],
  },
];

export { routes };
