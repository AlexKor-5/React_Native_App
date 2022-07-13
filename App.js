import React, {useState} from "react"
import { StyleSheet, View, FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from "./components/header"
import TodoItem from "./components/todosItem";
import AddToDo from "./components/addtodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const addTask = (inputValue, task, setInputValue)=>{
    if(inputValue.length > 0){
      setInputValue("")
      setTodos((prev)=> [...prev,task])
    }else {
      Alert.alert('OOPS', 'Todo must be over 1 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo addToDo={addTask}/>
          <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TodoItem item={item} pressHandler={pressHandler} />
                )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
