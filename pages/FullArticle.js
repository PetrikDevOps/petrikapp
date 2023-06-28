import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import styles from './styles';

function FullArticle({ route }) {
  const { article } = route.params;
  const navigation = useNavigation(); // Retrieve the navigation object
  const [isFocused, setIsFocused] = useState(true);

  useEffect(() => {
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setIsFocused(false);
    });
    if (!isFocused) {
      navigation.navigate('News')
    }
    return unsubscribeBlur;
  }, []);

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