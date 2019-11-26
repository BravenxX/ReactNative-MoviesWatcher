/**
 * Standar App button
 * @module StndButton
 */

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

/**
 * @type {Function}
 * @returns {Object}
 * @param {Object} props
 * @param {Object} props.children - JSX inside Touchable
 * @param {Function} props.onPress
 * @param {Object} [props.style] - Touchable style
 */

const StndButton = ({ children, style, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={style ? [styles.touchable, style] : styles.touchable}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    backgroundColor: 'red',
  },
});

export { StndButton };
