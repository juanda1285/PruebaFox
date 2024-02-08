import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';

interface Article {
  title: string;
  description: string;
  source: {
    name: string;
  };
  publishedAt: string;
  url: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1); // Página actual
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);

      // Establecí un numero de elementos por pagina para poder apreciar el infiniteScroll
      const pageSize = 8;

      const apiKey = '4414b1aa96f14736b55cd40af3be7cc5';
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=${apiKey}&page=${page}`,
      );
      const data = await response.json();

      if (data.articles) {
        setArticles(prevArticles => [...prevArticles, ...data.articles]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error al obtener datos de la API de noticias:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenUrl = (url: string) => {
    Linking.openURL(url);
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const height = event.nativeEvent.contentSize.height;
    const threshold = 370;
    if (
      offsetY >
        height - event.nativeEvent.layoutMeasurement.height - threshold &&
      !loading
    ) {
      fetchNews();
    }
  };

  const handleResetNews = () => {
    setArticles([]);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias App</Text>
      {!loading && articles.length === 0 && (
        <Button title="Obtener Noticias" onPress={fetchNews} />
      )}
      {articles.length > 0 && (
        <Button
          title="Reiniciar Noticias"
          onPress={handleResetNews}
          color="#FFA500"
        />
      )}
      {articles.length > 0 && (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={400}>
          <ScrollView horizontal>
            <View style={styles.tableContainer}>
              <View style={styles.tableRow}>
                <Text
                  style={(styles.columnHeader, {marginLeft: 20, width: 100})}>
                  Título
                </Text>
                <Text style={(styles.columnHeader, {width: 100})}>
                  Subtítulo
                </Text>
                <Text style={styles.columnHeader}>Tipo</Text>
                <Text style={styles.columnHeader}>Fecha de Publicación</Text>
                <Text style={styles.columnHeader}>Acción</Text>
              </View>
              {articles.map((article, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={(styles.cell, {width: 100})}>
                    {article.title}
                  </Text>
                  <Text
                    style={(styles.cell, {marginLeft: 20, width: 100})}
                    numberOfLines={10}
                    ellipsizeMode="tail">
                    {article.description}
                  </Text>
                  <Text style={styles.cell}>{article.source.name}</Text>
                  <Text style={styles.cell}>{article.publishedAt}</Text>
                  <View style={(styles.cell, {marginLeft: 20, height: 100})}>
                    <Button
                      title="Ir a la noticia"
                      onPress={() => handleOpenUrl(article.url)}
                    />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      )}
      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tableContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#c8e1ff',
    paddingVertical: 10,
    marginBottom: 5,
  },
  columnHeader: {
    flex: 3,
    marginLeft: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cell: {
    flex: 10,
    textAlign: 'center',
  },
  titleCell: {
    flex: 3,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  loadingContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
