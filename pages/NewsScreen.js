import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Article from '../elements/Article';
import styles from './styles';

// Sample data for news articles
const articles = [
  {
    id: 1,
    topic: 'CodeWeek 2023',
    title: 'Az elveszett Code',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Ut ornare lectus sit amet est placerat in egestas erat. Facilisi cras fermentum odio eu',
    image: require('../assets/adaptive-icon.png'),
    more: true,
  },
  {
    id: 2,
    topic: 'CsibeTábor 2023',
    title: 'Jó volt a csibetábor :3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Ut ornare lectus sit amet est placerat in egestas erat. Facilisi cras fermentum odio eu',
    image: require('../assets/adaptive-icon.png'),
    more: true,
  },
  // itt majd apibol fetcheljuk a híreket
];

function NewsScreen() {
  const maxDescriptionLength = 100;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Petrik</Text>
      <View style={styles.line} />

      {articles.map((article) => (
        <Article key={article.id} article={article} maxDescriptionLength={maxDescriptionLength} />
      ))}
    </ScrollView>
  );
}

export default NewsScreen;
