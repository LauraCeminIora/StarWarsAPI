import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>
      <Text>RA: 1131015</Text>
      <Text>Nome: Laura Cemin Iora</Text>
      <Text>Email: 1131015@atitus.edu.br</Text>
      <Text>RA: 1136562</Text>
      <Text>Nome: Júlia Wonsick Pazinatto</Text>
      <Text>Email: 1136562@atitus.edu.br</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});
