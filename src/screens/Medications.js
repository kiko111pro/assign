import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {data} from '../data/data';
import MedicalCard from '../components/MedicalCard';

function Medications() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Medications" subTitle="Current prescribed medication" />
      <View style={{padding: 12}}>
        {data.map((val, id) => (
          <MedicalCard item={val} key={id} />
        ))}
      </View>
    </ScrollView>
  );
}

export default Medications;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
