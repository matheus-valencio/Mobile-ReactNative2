import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './src/pages/abertura-conta'; 
import Dados from './src/pages/dados-informados'; 

const Stack = createStackNavigator(); 



export default function App(){ 
  
  return( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Abertura de Conta" component={Home} /> 
        <Stack.Screen name="Dados Informados" component={Dados} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ) 
} 