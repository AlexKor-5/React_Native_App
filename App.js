import React, {useState} from "react"
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [greeting, setGreeting] = useState("Hello")

  return (
    <View style={styles.container}>
      <View>
        <Text>{greeting}</Text>
        <Button
            onPress={()=>setGreeting("How are you doing!")}
            title="Change state"
            color="yellowgreen"/>
      </View>
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
});
