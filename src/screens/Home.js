import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import {data} from '../data/data';
import Card from '../components/Card';
import AppointmentCard from '../components/AppointmentCard';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Good Morning!" subTitle="Thursday, April 15th" />
      <View style={styles.childContainer}>
        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 10}}>
            Today's Medication
          </Text>
          <ScrollView
            horizontal={true}
            style={{width: Dimensions.get('window').width - 20}}>
            {data.map((val, idx) => (
              <View style={styles.cardWrap} key={idx}>
                <Card item={val} />
              </View>
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', marginVertical: 15}}>
            Next Appointment
          </Text>
          <AppointmentCard />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  childContainer: {
    padding: 20,
  },

  cardWrap: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
    // borderWidth: 1,
    backgroundColor: 'white',
    // overflow: 'hidden',
  },
});
