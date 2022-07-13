import React from "react"
import { StyleSheet, View } from 'react-native';
import Home from "./screens/home"

export default function App() {
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
