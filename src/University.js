import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, TouchableOpacity } from 'react-native';


export default function () {

  
  const [countryName, setCountryName] = React.useState('');
  const [countryData, setCountryData] = React.useState([]);

  const getCountryUniversityInfo = (countryName) => {
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
        .then((response) => response.json())
        .then((data) => setCountryData(data))
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>University</Text>
        <View style={styles.secondContainer}>
        <TextInput style={styles.input} value={countryName} onChangeText={setCountryName}/>
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => getCountryUniversityInfo(countryName)}>
          <Text>Search</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={styles.container}>
      {
        countryData && countryData.map(university => <Text>{university.name} - {university.domains[0]} - {university.web_pages[0]}</Text>)
      }
    </View>
    </>
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