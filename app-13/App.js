import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
 
const Tab = createBottomTabNavigator();

const icons = {
  Pessoal:{
    name: 'ios-person',
  },
  Formação:{
    name: 'ios-book',
  },
  Experiência:{
    name: 'ios-reader',
  }
}

 
export default function App(){
  return(
    <NavigationContainer>
       <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >


        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Formacao} />
        <Tab.Screen name='Experiência' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


