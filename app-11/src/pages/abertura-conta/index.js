import React from 'react';
import { View, StyleSheet,Button, Text, Switch,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

export default function Home(){ 

  const navigation = useNavigation(); 
  const [nome, onChangeNome] = React.useState("");
  const [idade, onChangeIdade] = React.useState("");
  const [sexo, onChangeSexo] = React.useState("");  
  const [escolaridade, onChangeEscolaridade] = React.useState(""); 
  const [limite, onChangeLimite] = React.useState(0); 
  const [brasileiro, onChangeBrasileiro] = React.useState(false);
  var brasileiroResult = "Nâo";

  function irDados(){ 
      if(brasileiro == true){
      brasileiroResult= "Sim";
      }else{
      brasileiroResult = "Não";
    }
      navigation.navigate('Dados Informados', { nome: nome,idade: idade, sexo:sexo, escolaridade:escolaridade,
        limite:limite,brasileiro:brasileiroResult }); 
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome:
      </Text>
      <TextInput
      style={styles.input}
      placeholder="ex. Matheus"
      placeholderTextColor="rgba(0,0,0,0.5)"
      onChangeText={onChangeNome}
        value={nome}
    />

      <Text style={styles.texto}>Idade:
      </Text>
      <TextInput
      style={styles.input}
      placeholder="ex. 28"
      keyboardType='numeric'
      placeholderTextColor="rgba(0,0,0,0.5)"
      onChangeText={onChangeIdade}
      value={idade.replace(/[^0-9]/g, '')}
    />

      <Text style={styles.texto}>Sexo:
      </Text>
      <Picker
      style={{fontSize:25, color:'black',width:250, marginBottom:10}}
      onValueChange={onChangeSexo}
      value={sexo}
      >
        <Picker.Item value={'Masculino'} label="Masculino" />
        <Picker.Item value={'Feminino'} label="Feminino" />
      </Picker>
     
      <Text style={styles.texto}>Escolaridade:
      </Text>
      <Picker
      style={{fontSize:25, color:'black',width:250, marginBottom:10}}
      onValueChange={onChangeEscolaridade}
        value={escolaridade}
      >
        <Picker.Item value={"Sem Escolaridade"} label="Sem Escolaridade" />
        <Picker.Item value={"Ensino Fundamental"} label="Ensino Fundamental" />
        <Picker.Item value={"Ensino Médio"} label="Ensino Médio" />
        <Picker.Item value={"Ensino Superior"} label="Ensino Superior" />
      </Picker>

      <Text style={styles.texto}>Limite: {limite}
      </Text>
      <Slider
      style={{width:250}}
      minimumValue={0}
      maximumValue={1000}
      onValueChange={onChangeLimite}
      value={limite}
      step={1}
      minimumTrackTintColor='green'
      maximumTrackTintColor='white'
      thumbTintColor='green'
    />

    <Text style={styles.texto}>Brasileiro:
    </Text>
    <Switch
     style={{width:50}}
     onValueChange={onChangeBrasileiro}
     value={brasileiro}
      />

      <Button title="Confirmar" onPress={irDados}/>
      
    </View>
   );
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
  input:{
    height: 45,
    borderWidth: 1,
    width: 200,
    borderColor: 'white',
    margin: 10,
    fontSize: 20,
    padding: 10,
    color: 'white',
  }
});