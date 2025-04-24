import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getStarshipsByUrls } from '../services/swapi';

export default function ShipsScreen({ route }) {
  const { urls } = route.params;
  const [ships, setShips] = useState([]);

  useEffect(() => {
    if (urls.length > 0) {
      getStarshipsByUrls(urls).then(responses => {
        setShips(responses.map(res => res.data));
      });
    }
  }, []);

  if (urls.length === 0) return <Text style={styles.message}>Não há naves disponíveis.</Text>;

  return (
    <FlatList
      data={ships}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>Nome: {item.name}</Text>
          <Text>Modelo: {item.model}</Text>
          <Text>Passageiros: {item.passengers}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, margin: 8, backgroundColor: '#ddd', borderRadius: 8 },
  message: { margin: 20, fontSize: 16 }
});
