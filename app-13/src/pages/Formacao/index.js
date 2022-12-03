import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Formacao() {
 return (
   <View style={styles.container}>
        <Text style={styles.texto}>{'Fatec Baixada Santista Rubens Lara'}</Text>
        <Text style={styles.texto}>{'Tecnólogo, Sistemas para Internet'}</Text>
        <Text style={styles.texto}>{'Fevereiro de 2020 - Dezembro 2022'}</Text>
   </View>
  );
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1,
    paddingTop:35,
  },
  texto:{
   fontSize:18,
   marginLeft: 15,
   marginBottom: 8,
   marginTop: 8,
   color: 'white'
  },
});