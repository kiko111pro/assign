import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../utils/colors';
import IIcon from 'react-native-vector-icons/Ionicons';

function MedicalCard({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={require('../assets/myicon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.right}>
        <View style={[styles.space_between, {marginVertical: 4}]}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
          <Icon name="info" size={18} color={colors.primary} />
        </View>
        <Text style={{marginVertical: 4}}>Directions: {item.directions}</Text>
        <View style={[styles.space_between, {width: '90%', marginVertical: 4}]}>
          <View>
            <Text style={{color: '#aaa'}}>Qty</Text>
            <Text>{item.quantity}</Text>
          </View>
          <View>
            <Text style={{color: '#aaa'}}>Pills</Text>
            <Text>{item.pills} left</Text>
          </View>
          <View>
            <Text style={{color: '#aaa'}}>RX</Text>
            <Text>{item.RX}</Text>
          </View>
        </View>

        <View
          style={{
            marginVertical: 4,
            alignItems: 'baseline',
          }}>
          <Text
            style={{
              color: '#aaa',
              backgroundColor: '#eee',
              paddingHorizontal: 8,
              borderRadius: 8,
              paddingVertical: 3,
            }}>
            <IIcon name="time" color="#aaa" size={18} /> 1 pill daily every
            morning{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default MedicalCard;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 6,
  },

  space_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    width: 20,
    height: 20,
    // aspectRatio: 1,
    position: 'absolute',
    top: 7,

    flex: 1,
  },

  left: {
    width: '10%',
    // borderWidth: 1,
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // textAlign:''
    backgroundColor: 'red',
    // height:
  },
  right: {
    width: '90%',
    // borderWidth: 1,
    borderColor: 'red',
  },
});
