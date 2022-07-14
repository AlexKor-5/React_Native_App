import React from "react"
import { StyleSheet, View,Text } from 'react-native';
import Home from "./screens/home"
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        'nunito-extra-light': require('./assets/fonts/Nunito-ExtraLight.ttf'),
        'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-italic':require('./assets/fonts/Nunito-Italic.ttf'),
        'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.container}>
                <Text>Loading... Fonts</Text>;
            </View>
        )
    }

  return (
      <View style={styles.container}>
        <Home/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding: 40,
  },
  list: {
    flex:1,
    marginTop: 20,
  },
});
