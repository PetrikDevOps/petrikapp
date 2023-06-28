import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import styles from './styles';

function FullArticle({ route }) {
  const { article } = route.params;
  const navigation = useNavigation(); // Retrieve the navigation object

  useEffect(() => {
    navigation.addListener('blur', () => {
      navigation.replace('News');
    });
    return () => {
      navigation.removeListener('blur');
    };
  }, ['navigation']);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.bigTopic}>{article.topic}</Text>
      <View style={styles.line} />

      <Image source={{ uri: article.image_uri }} style={styles.image} />
      <Text style={styles.description}>{article.content}</Text>
      <Text style={styles.fullArticle}>{article.fullArticle}</Text>
    </ScrollView>
  );
}

export default FullArticle;