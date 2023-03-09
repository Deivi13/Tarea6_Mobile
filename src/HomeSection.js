import React from 'react';
import { VStack, Box, Divider,Avatar, NativeBaseProvider, HStack, Center } from 'native-base';
import {View, Image, StyleSheet} from 'react-native';
// Deivi Hernandez & 2019-7952
export default function () {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/4404/4404862.png',
        }}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
  },
  tinyLogo: {
    width: 400,
    height: 400,
  },
});

