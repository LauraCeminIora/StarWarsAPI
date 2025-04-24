import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFilmsByUrls } from '../services/swapi';

export default function FilmsScreen({ route }) {
  const { urls } = route.params;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (urls.length > 0) {
      getFilmsByUrls(urls).then(responses => {
        setFilms(responses.map(res => res.data));
      });
    }
  }, []);

  if (urls.length === 0) return <Text style={styles.message}>Não há filmes disponíveis.</Text>;

  return (
    <FlatList
      data={films}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>Título: {item.title}</Text>
          <Text>Diretor: {item.director}</Text>
          <Text>Data de Lançamento: {item.release_date}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, margin: 8, backgroundColor: '#ccc', borderRadius: 8 },
  message: { margin: 20, fontSize: 16 }
});
