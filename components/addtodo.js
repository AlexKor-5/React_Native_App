import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text,TextInput,View,Button} from 'react-native';

export default function AddToDo({ addToDo=(f)=>f}) {
    const [input,setInput] = useState()
    return (
      <View>
          <TextInput
              style={styles.input}
              placeholder={"Enter some todo"}
              onChangeText={setInput}
              value={input}
          />
          <Button
              title="Add"
              color="#841584"
              onPress={()=>addToDo(input,{text:input,key:Math.random().toString()},setInput)}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        borderColor:'black'
    }
})