/**
 * @module LoginButton
 */

import React from 'react';
import { Text } from 'react-native';
import { StndButton } from '../../../utilities';

/**
 * @type {Function}
 * @return {Object}
 * @param {Object} props
 * @param {Function} props.onPress
 */

const LoginButton = ({ onPress }) => (
  <StndButton onPress={onPress}>
    <Text>Ingresar</Text>
  </StndButton>
);

export { LoginButton };
