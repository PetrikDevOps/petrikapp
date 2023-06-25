import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function BusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buszok</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>Keleti felé</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>Zugló felé</Text>
    </View>
  );
}

export default BusScreen;