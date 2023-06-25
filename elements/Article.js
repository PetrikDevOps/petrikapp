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
    article.description.length > maxDescriptionLength
      ? article.description.substring(0, maxDescriptionLength - 1).trim() + ' ...'
      : article.description;

  return (
    <View>
      <Text style={styles.topic}>{article.topic}</Text>
      <Text style={styles.articleTitle}>{article.title}</Text>
      <Image source={article.image} style={styles.image} />
      <Text style={styles.description}>{truncatedDescription}</Text>

      {article.more && (
        <TouchableOpacity style={styles.moreContainer} onPress={handlePressMore}>
          <Text style={styles.moreText}>MORE</Text>
        </TouchableOpacity>
      )}
      <View style={styles.line} />
    </View>
  );
}

export default Article;
