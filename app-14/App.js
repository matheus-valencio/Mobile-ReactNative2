import React, { Component } from 'react' 

import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Switch} from 'react-native' 

import AsyncStorage from '@react-native-async-storage/async-storage' 

 

export default class App extends Component{ 

 

  constructor(props){ 

    super(props); 

    this.state = { 
      fl:true,
      dia: false,
      pequeno: false,
      cor:'rgba(0,0,0,0.3)',
      tamanho: 20,
    }; 

    this.gravaDia = this.gravaDia.bind(this); 
    this.gravarTamanho = this.gravarTamanho.bind(this);
  } 
  async componentDidMount(){ 
    await AsyncStorage.multiGet(["dia", "cor","pequeno","tamanho"]).then(response => {
            this.setState({dia: response[0][1],
            cor:response[1][1],pequeno: response[2][1],tamanho: response[3][1] });
        })
  } 
  
  async componentDidUpdate(_, prevState){ 

    const dia = this.state.dia;
    const cor = this.state.cor;
    const pequeno = this.state.pequeno;
    const tamanho = this.state.tamanho;


    if(prevState !== dia){ 

      await AsyncStorage.setItem('dia', dia);
    } 
    if(prevState !== cor){ 
      await AsyncStorage.setItem('cor', cor); 
    } 
    if(prevState !== tamanho){
      await AsyncStorage.setItem('tamanho', tamanho); 
    }
    if(prevState !== pequeno){ 
      await AsyncStorage.setItem('tamanho', tamanho);   
    }

  } 
 

  gravaDia(valor){ 
    this.setState({ 
      dia: valor
    });

    if(valor == true){
      this.setState({ 
      cor: 'white',
    });
    }else{
      this.setState({ 
      cor: 'rgba(0,0,0,0.3)',
    });
    }
  }
  gravarTamanho(valor){
    this.setState({ 
      pequeno: valor,
    });
    if(valor == true){
      this.setState({ 
      tamanho: 12,
    });
    }else{
      this.setState({ 
      tamanho: 20,
    });
    }
  } 

 

  render(){ 

    return( 

      <View style={styles.container}> 
        <Text style={styles.h1}>Frases</Text>
        <View style={styles.switches}>
          <View style={styles.viewSwitch}>
            <Text style={styles.label}>Dia</Text>
            <Switch
              onValueChange={this.gravaDia}
              value={this.state.dia}
              />
          </View>
          <Text style={styles.label}>Pequeno</Text>
          <Switch
          onValueChange={this.gravarTamanho}
            value={this.state.pequeno}
          />
        </View>

        <View style={{backgroundColor:this.state.cor,width:250, height:300}}>
          <Text style={{fontSize:this.state.tamanho}}>
          "A vingança nunca é plena, mata a alma e envenena. (Seu Madruga)"</Text>
        </View>

      </View>     
    ); 
  } 
} 

 

const styles = StyleSheet.create({ 

  container:{ 
    flex: 1, 
    marginTop: 20, 
    alignItems: 'center' 
  }, 

  switches:{ 
    flexDirection: 'row', 
    alignItems: 'center' 
  }, 
  viewSwitch:{
    flexDirection: 'row', 
    alignItems: 'center',
    marginRight:50 
  },
  h1:{
    fontSize:40,
    marginBottom:20
  },
  label:{
    fontSize: 20,
    marginRight:10
  },
    botao:{ 

    backgroundColor: '#222', 

    color: '#FFF', 

    height: 40, 

    padding: 10, 

    marginLeft: 4, 

  }, 
}); 