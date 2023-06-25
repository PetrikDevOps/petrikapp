import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>Osztály</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>Van egy tippem!</Text>
    </View>
  );
}

export default ProfileScreen;
