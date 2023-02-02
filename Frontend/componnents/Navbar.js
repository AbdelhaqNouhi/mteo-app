import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import NextDaysWeather from '../Screens/NextDaysWeather';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login}/>
        <Drawer.Screen name="WeekWeather" component={NextDaysWeather}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}