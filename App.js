import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, TextInput, Alert, TouchableOpacity, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, todo]);
      setTodo('');
    } else {
      Alert.alert('Error', 'Please enter a todo');
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={{ padding: 16 }}>
        <View style={styles.container}>
          <Text style={styles.header}>A Simple Todo</Text>
          <TextInput
            value={todo}
            onChangeText={(text) => setTodo(text)}
            style={styles.textBox}
            placeholder="Add your Todo here"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoList}>
          <FlatList 
            data={todos} 
            renderItem={({item}) => <Text>{item}</Text>} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: { 
    marginTop: 100
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  textBox: {
    height: 40,
    borderColor: 'lightblue',
    borderWidth: 1,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoList: {
    marginTop: 16,
  }
});

export default App;
