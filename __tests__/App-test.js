import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Describe sirve para agrupar tests (Its) y describir lo que se
// quiere testear

describe('Tests', () => {
  describe('Test2', () => {
    it('renders correctly', () => {
      renderer.create(<App />);
    });
    it('Otro renders correctly', () => {});
  });
});
