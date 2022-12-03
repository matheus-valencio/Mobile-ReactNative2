import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
 
 
export default function Experiencia() {
 return (
      <View style={styles.container}>
        <Text style={styles.texto}>{'Estagiário de TI'}</Text>
        <Text style={styles.texto}>{'Meta Sistemas e Assessoria Ltda.'}</Text>
        <Text style={styles.texto}>{'Estágio fev de 2022 - o momento'}</Text>
        <Text style={styles.texto}>{'Santos, São Paulo, Brazil'}</Text>
        <Text style={styles.texto}>{'Projetos:'}
          <Text style={styles.hyperlink} onPress={() => { 
            Linking.openURL('https://github.com/matheus-valencio'); 
          }}> 
          GitHub 
          </Text> 
        </Text>
        
      </View>
    )
  }

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1,
    paddingTop:35
  },
  texto:{
   fontSize:18,
   marginLeft: 15,
   marginBottom:8,
   color: 'white'
  },
  hyperlink: {
    color: 'blue',
    fontSize: 18,
    marginLeft: 8
  },
});
