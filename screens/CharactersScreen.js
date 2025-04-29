import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/swapi';
import { useNavigation } from '@react-navigation/native';

const characterIds = [1, 4, 13, 20, 14]; // Luke, Darth Vader, Han Solo, Yoda, Chewbacca

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    Promise.all(characterIds.map(id => api.get(`people/${id}`)))
      .then(responses => setCharacters(responses.map(res => res.data)))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { character: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 16, backgroundColor: '#eee', marginBottom: 8, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: 'bold' }
});
