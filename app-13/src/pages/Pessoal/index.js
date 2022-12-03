import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
 
 
export default function Pessoal() {
 return (
   <View style={styles.container}>
        <Image
        source={require('/img/perfil.jpg')}
        style={styles.imagem}
        />
        <Text style={styles.h1}>{'Matheus Valencio Fonseca'}</Text>
        <Text style={styles.texto}>{'28 Anos'}</Text>
   </View>
  );
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1
  },
  h1:{
   fontSize:25,
   marginBottom: 8,
   marginTop: 35,
   color: 'white',
   textAlign:'center'
  },
  texto:{
   fontSize:20,
   marginTop: 8,
   color: 'white',
   textAlign:'center'
  },
  imagem:{
   width: 155,
   height: 155,
   marginTop: 25,
   borderRadius:10,
   alignSelf:'center'
  }
});