import React from "react";
import { Text } from 'react-native'; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import CharactersScreen from './screens/CharactersScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen';
import ShipsScreen from './screens/ShipsScreen';
import FilmsScreen from './screens/FilmsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Personagens" component={CharactersScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Text onPress={() => navigation.navigate('Sobre')} style={{ marginRight: 10 }}>Sobre</Text>
          )
        })} />
        <Stack.Screen name="Details" component={CharacterDetailsScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Ships" component={ShipsScreen} options={{ title: 'Naves' }} />
        <Stack.Screen name="Films" component={FilmsScreen} options={{ title: 'Filmes' }} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
