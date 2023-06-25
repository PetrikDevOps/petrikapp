import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function HelyettesitesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Helyettesítés</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>10E Helyettesítés</Text>
    </View>
  );
}

export default HelyettesitesScreen;
