import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
   Text,
   Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  // Local Variables
  $buttonColor: '#317af7',
  $buttonTextColor: '#ffffff',
  $buttonUnderlayColor: '#7BAAF9',

  button: {
    backgroundColor: '$buttonColor',
    paddingVertical: 15,
    paddingHorizontal: 35,
    alignItems: 'center',
    margin: 8,
    '@media ios': {
      borderRadius: 4,
    },
    '@media android': {
      borderRadius: 1,
      elevation: 4,
    },
  },
  title: {
    color: '$buttonTextColor',
    fontSize: 15,
  }
});

export const Button = ({ title, onPress }) => {
  if (Platform.OS === 'ios') {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.button}
      underlayColor={styles.$buttonUnderlayColor}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}
return (

  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple(styles.$buttonUnderlayColor)}
  >
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);
};
