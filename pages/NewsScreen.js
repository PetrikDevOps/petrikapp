import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import Article from '../elements/Article';
import styles from './styles';

function NewsScreen() {
  const maxDescriptionLength = 100;
  const [articles, setArticles] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setRefreshing(true); // Start refreshing
      const response = await fetch('https://app.vincus.me/news');
      const data = await response.json();

      if (Array.isArray(data)) {
        const articlesWithImageURL = data.map((article) => ({
          ...article,
          image_uri: `https://app.vincus.me${article.image_uri}`,
        }));
        setArticles(articlesWithImageURL);
      } else if (typeof data === 'object' && data !== null) {
        const articleWithImageURL = {
          ...data,
          image_uri: `https://app.vincus.me${data.image_uri}`,
        };
        setArticles([articleWithImageURL]);
      } else {
        console.error('Invalid articles data:', data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchArticles} />
      }
    >
      <Text style={styles.title}>Petrik</Text>
      <View style={styles.line} />

      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          maxDescriptionLength={maxDescriptionLength}
        />
      ))}
    </ScrollView>
  );
}

export default NewsScreen;
