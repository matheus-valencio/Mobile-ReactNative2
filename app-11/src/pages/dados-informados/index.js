import React from 'react'; 

import { View, Text, Button, StyleSheet } from 'react-native'; 

import { useNavigation } from '@react-navigation/native'; 

 

export default function Dados( {route} ){ 

  const navigation = useNavigation(); 

  return( 
    <View style={styles.container}> 
    
      <Text style={styles.texto}>{'Nome: ' + route.params?.nome}</Text> 
      <Text style={styles.texto}>{'Idade: ' + route.params?.idade}</Text> 
      <Text style={styles.texto}>{'Sexo: ' + route.params?.sexo}</Text> 
      <Text style={styles.texto}>{'Escolaridade: ' + route.params?.escolaridade}</Text> 
      <Text style={styles.texto}>{'Limite: ' + route.params?.limite}</Text> 
      <Text style={styles.textoFinal}>{'Brasileiro: ' + route.params?.brasileiro}</Text> 
      
      <Button
      title='Voltar' 
      onPress={ () => navigation.goBack() } 
      /> 

    </View> 

  ) 

} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.5)',
    padding: 30,
      
  },
  texto:{
    fontSize:20, 
    color:'white'
  },
  textoFinal:{
    fontSize:20, 
    color:'white',
    marginBottom:50
  }
});