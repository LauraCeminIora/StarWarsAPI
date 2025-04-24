import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CharacterDetailsScreen({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Text>Altura: {character.height}</Text>
      <Text>Peso: {character.mass}</Text>
      <Text>Cabelo: {character.hair_color}</Text>
      <Text>Pele: {character.skin_color}</Text>
      <Text>Olhos: {character.eye_color}</Text>
      <Text>Gênero: {character.gender}</Text>

      <Button title="Naves" onPress={() => navigation.navigate('Ships', { urls: character.starships })} />
      <Button title="Filmes" onPress={() => navigation.navigate('Films', { urls: character.films })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});
