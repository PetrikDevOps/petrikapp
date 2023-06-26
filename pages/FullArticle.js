import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

function FullArticle({ route }) {
  const { article } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.fullArticleTitle}>{article.title}</Text>
      <Text style={[styles.topic, { textAlign: 'center' }]}>{article.topic}</Text>
      <View style={styles.line} />

      <Image source={{ uri: article.image_uri }} style={styles.image} />
      <Text style={styles.description}>{article.content}</Text>
      <Text style={styles.fullArticle}>{article.fullArticle}</Text>
    </ScrollView>
  );
}

export default FullArticle;
