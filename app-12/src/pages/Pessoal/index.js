import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={styles.container}>
        <Text style={styles.h1}>{'Matheus Valencio Fonseca'}</Text>
        <Text style={styles.texto}>{'29 Anos'}</Text>
   </View>
  );
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1,
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
});