import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, TouchableOpacity } from 'react-native';



export default function () {

  const [data, setData] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`https://api.genderize.io/?name=${name}`)
        .then((response) => response.json())
        .then((dat) => setData(dat))
    }
    getData();
  }, [name]);

  const testButton = (data) => {
    if(data.gender == 'male'){
      return(
        Alert.alert("🔵")
      );
    }else{
      Alert.alert('🌺')
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Predecir Genero</Text>
        <View style={styles.secondContainer}>
        <TextInput style={styles.input}
        onChangeText={setName}
        value={name}/>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => testButton(data)}>
          <Text>PREDICT</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    padding: 20
  }, 
  secondContainer:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    padding:20,
  },
  input: {
    width:200,
    height: 40,
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: -50,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    width: 100,
    height: 40,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 400,
    height: 400,
  }

  },
);