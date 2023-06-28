import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

function ProfileScreen() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    // Load stored class and grade when the component mounts
    loadStoredData();
  }, []);

  const loadStoredData = async () => {
    try {
      const storedGrade = await AsyncStorage.getItem('selectedGrade');
      const storedClass = await AsyncStorage.getItem('selectedClass');

      if (storedGrade && storedClass) {
        setSelectedGrade(storedGrade);
        setSelectedClass(storedClass);
      }
    } catch (error) {
      console.log('Error loading stored data:', error);
    }
  };

  const handleSetButtonPress = async () => {
    if (selectedGrade && selectedClass) {
      try {
        // Store the selected class and grade
        await AsyncStorage.setItem('selectedGrade', selectedGrade);
        await AsyncStorage.setItem('selectedClass', selectedClass);
      } catch (error) {
        console.log('Error storing data:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.line} />
      <Text style={styles.topic}>Osztály</Text>

      <View style={styles.center}>
        <Picker
          style={styles.selectionBox}
          selectedValue={selectedGrade}
          onValueChange={(value) => setSelectedGrade(value)}
        >
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
        </Picker>
        <Picker
          style={styles.selectionBox}
          selectedValue={selectedClass}
          onValueChange={(value) => setSelectedClass(value)}
        >
          <Picker.Item label="KNY" value="kny" />
          <Picker.Item label="NY" value="ny" />
          <Picker.Item label="A" value="a" />
          <Picker.Item label="B" value="b" />
          <Picker.Item label="C" value="c" />
          <Picker.Item label="D" value="d" />
          <Picker.Item label="E" value="e" />
        </Picker>
        <Button title="Set" onPress={handleSetButtonPress} color={'#252525'} />
      </View>
      <View style={styles.line} />
      <Text style={styles.topic}>Van egy tippem!</Text>
    </View>
  );
}

export default ProfileScreen;
