/**
 * @module Login
 */

import React from 'react';
import { ScreenView } from '../../components/utilities';
import {
  LoginPresentation,
  LoginButton,
} from '../../components/containers/loginComps';
/**
 * Login screen to get logged into MoviesWatcher App.
 * @type {Function}
 * @returns {Object}
 */

const Login = () => {
  const onPressLoginBtn = () => {
    console.log('presionado');
    alert('apretardo');
  };

  return (
    <ScreenView>
      <LoginPresentation />
      <LoginButton onPress={onPressLoginBtn} />
    </ScreenView>
  );
};

export default Login;
