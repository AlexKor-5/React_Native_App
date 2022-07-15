import 'react-native-gesture-handler';
import React from "react"
import { StyleSheet, View,Text } from 'react-native';
import Home from "./screens/home"
import ReviewDetails from "./screens/reviewDetails"
import About from "./screens/about";

import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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
                <Text>Loading... Fonts</Text>
            </View>
        )
    }

    const Root = ()=>
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
            }}
        >
            <Drawer.Screen name="GameZone" component={Home}/>
            <Drawer.Screen name="About GameZone"
                           component={About}
                           options={{ drawerLabel: 'About' }}/>
        </Drawer.Navigator>

  return (
      <View style={styles.container}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Root"
                      component={Root}
                      options={{ headerShown: false }}
                  />
                  <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
              </Stack.Navigator>
          </NavigationContainer>
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
