import React from 'react';
import { VStack, Box, Divider,Avatar, NativeBaseProvider, HStack, Center, Image } from 'native-base';

export default function () {
  return (
     <NativeBaseProvider>
         <HStack justifyContent="center" p="5" space={2}>
      <Avatar size="2xl"  bg="green.500" source={{
      uri: "https://drive.google.com/uc?export=view&id=1-vjycr5F7VU3EwqYapY0N05Cv3GSJ6IJ"
    }}>
        AJ
      </Avatar>
    </HStack>
    
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box alignItems="center" px="4" pt="4">
          Deivi G. Hernandez
        </Box>
         <Box alignItems="center" px="4" pt="4" >
         deivighernandez13@gmail.com
        </Box>
         <Box alignItems="center" px="4" pt="4">
          Telefono: (829) 459 - 6396
        </Box>
        <Box alignItems="center" px="4">
         Soy un desarrollador dominicano.
        </Box>
        <Box px="4" pb="4">
        <Center>
            <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/f/f6/FirmaDavidIlDivo.png"
             }} alt="Alternate Text" size="xl" />
        </Center>;
        </Box>
      </VStack>
    </Box>
     </NativeBaseProvider>
  );

}

