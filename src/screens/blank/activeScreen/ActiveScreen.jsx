import React from 'react';
import { useHistory, useParams } from 'react-router';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { activeAccountStart } from '../../../redux/auth/auth.actions';
import {
  selectActivate,
  selectError,
} from '../../../redux/auth/auth.selectors';

export const ActiveScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const activate = useSelector(selectActivate);
  const history = useHistory();

  activate ?? dispatch(activeAccountStart(id));

  if (error === 'No se encontró el token' && activate === true) {
    // FIXED: cannot update during an existing state transition (such as within `render`);
    Swal.fire(
      'Éxito',
      'Cuenta activada, favor de iniciar sesión',
      'success'
    ).then(() => {
      history.push('/login');
    });
  }

  if (activate === false) {
    Swal.fire(
      'Error',
      'No se pudo activar su cuenta, favor de intentarlo más tarde',
      'error'
    ).then(() => {
      history.push('/login');
    });
  }

  // FIXED: Corregir el posicionamiento del spinner
  return (
    <div>
      <h5>Estamos verificando su cuenta, favor espere</h5>
      <ProgressSpinner />
    </div>
  );
};
