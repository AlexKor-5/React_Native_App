import React, {useState} from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [greeting, setGreeting] = useState("Hello")

  const handleClick = ()=>{
    console.log('native')
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleClick}>
          <View style={styles.box}>
            <Text>{greeting}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box:{
    padding:30,
    backgroundColor:'orange'
  }
});
