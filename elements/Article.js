import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../pages/styles';

function Article({ article, maxDescriptionLength }) {
  const navigation = useNavigation();

  const handlePressMore = () => {
    navigation.navigate('FullArticle', { article });
  };

  const truncatedDescription =
    article.content.length > maxDescriptionLength
      ? article.content.substring(0, maxDescriptionLength - 1).trim() + ' ...'
      : article.content;

  return (
    <View>
      <Text style={styles.topic}>{article.topic}</Text>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Image source={{ uri: article.image_uri }} style={styles.image} />
      <Text style={styles.description}>{truncatedDescription}</Text>
      <TouchableOpacity style={styles.moreContainer} onPress={handlePressMore}>
        <Text style={styles.moreText}>MORE</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
}

export default Article;
