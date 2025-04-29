import React, { useEffect, useState } from "react";
import { Text } from 'react-native'; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Audio } from 'expo-av'; 
import CharactersScreen from './screens/CharactersScreen.js';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen.js';
import ShipsScreen from './screens/ShipsScreen.js';
import FilmsScreen from './screens/FilmsScreen.js';
import AboutScreen from './screens/AboutScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [sound, setSound] = useState();

  useEffect(() => {
    const playSound = async () => {
      try {
        // Permissões e configurações para garantir reprodução
        await Audio.requestPermissionsAsync(); // Para iOS
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
        });

        const { sound } = await Audio.Sound.createAsync(
          require('./assets/MusicaStarWars.mp3')
        );
        setSound(sound);
        await sound.playAsync(); 
      } catch (error) {
        console.error("Erro ao carregar o áudio:", error);
      }
    };

    playSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <Text onPress={() => navigation.navigate('Sobre')} style={{ marginRight: 10 }}>
              Sobre
            </Text>
          )
        })}
      >
        <Stack.Screen 
          name="Personagens" 
          component={CharactersScreen} 
        />
        <Stack.Screen name="Details" component={CharacterDetailsScreen} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Ships" component={ShipsScreen} options={{ title: 'Naves' }} />
        <Stack.Screen name="Films" component={FilmsScreen} options={{ title: 'Filmes' }} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
