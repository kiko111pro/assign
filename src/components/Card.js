import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

function Card({item}) {
  return (
    <View style={styles.Card}>
      <View style={styles.header}>
        <Text style={styles.title}>8:00 AM</Text>
        <Text style={styles.subtitle}>Daily</Text>
      </View>
      <View style={styles.info}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <View style={styles.wrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.tag}>Qty</Text>
            <Text>{item.quantity}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.tag}>Pills</Text>
            <Text>{item.quantity} left</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Mark as Taken</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  Card: {
    borderRadius: 8,
    // borderWidth: 1,
    // padding: 16,
    width: 200,
    // marginRight: 10,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    // borderWidth: 1,
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 2,
    marginRight: 5,
  },

  button: {},

  tag: {
    color: '#aaa',
  },

  wrapper: {
    flexDirection: 'row',
  },

  button: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#bdbdbd',
  },

  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  infoItem: {
    flex: 1,
    marginVertical: 8,
  },

  header: {
    padding: 20,
    backgroundColor: '#f27979',
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 16,
    // marginVertical: ,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#eee',
  },

  subtitle: {
    color: '#ddd',
  },
});
