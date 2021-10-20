import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {colors} from '../utils/colors';

function Header({title,subTitle}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: Dimensions.get('window').height * 0.25,
    justifyContent: 'flex-end',
    padding: 20,
  },

  title: {
    color: '#eee',
    fontSize: 44,
    marginBottom: 10,
  },

  subTitle: {
    color: '#ccc',
    fontSize: 18,
  },
});
