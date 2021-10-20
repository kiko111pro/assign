import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {colors} from '../utils/colors';

function AppointmentCard() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={{color: colors.primary}}>APR</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>16</Text>
      </View>
      <View style={styles.right}>
        <View>
          <Text>Dr. Sunil</Text>
          <Text>12:00 pm</Text>
        </View>
        <Image
          source={require('../assets/user.png')}
          resizeMode="cover"
          style={{height: 50, width: 50}}
        />
      </View>
    </View>
  );
}

export default AppointmentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 70,
    borderRadius: 8,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  left: {
    width: '20%',
    borderRightColor: '#bdbdbd',
    // justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },
  right: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // borderWidth: 2,
    alignItems: 'center',
  },
});
