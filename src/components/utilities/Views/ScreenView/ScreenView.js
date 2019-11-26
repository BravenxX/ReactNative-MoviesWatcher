import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenView = ({children, style = null}) => {
  return (
    <View style={style ? [styles.container, style] : styles.container}>
      {children}
    </View>
  );
};

export {ScreenView};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
