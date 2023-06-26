import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e1e1e',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 60,
    color: '#eaeaea',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    marginTop: 20,
  },
  topic: {
    fontSize: 16,
    color: '#2ab4ab',
    marginBottom: 5,
  },
  bigTopic: {
    fontSize: 24,
    color: '#2ab4ab',
    textAlign: 'center',
    marginBottom: 5,
  },
  articleTitle: {
    color: '#EAEAEA',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
  },
  fullArticleTitle: {
    color: '#EAEAEA',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  description: {
    color: '#EAEAEA',
    fontSize: 20,
    marginBottom: 10,
  },
  moreContainer: {
    backgroundColor: '#2ab4ab',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  moreText: {
    fontSize: 16,
    color: '#ffffff',
  },
  articleSeparator: {
    height: 1,
    backgroundColor: '#eaeaea',
    marginVertical: 20,
  },
});

export default styles;
