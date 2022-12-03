import 'react-native-gesture-handler';
import React from 'react';
import './polyfills';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
import Home from './src/pages/Pessoal';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Experiencia';
 
import CustomDrawer from './src/components/CustomDrawer';
 
export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="Pessoal" component={Home} />
      <Drawer.Screen name="Formação" component={Sobre} />
      <Drawer.Screen name="Experiência" component={Contato} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
 
