import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 60,
    color: '#eaeaea',
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
  articleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
  },
  fullArticleTitle: {
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
    fontSize: 16,
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
