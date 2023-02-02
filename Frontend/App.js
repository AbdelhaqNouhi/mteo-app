import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView ,Dimensions } from 'react-native';

import Navbar from './componnents/Navbar'
import 'react-native-gesture-handler'

export default function App() {
  return ( 
    <>
    <Navbar/>
    {/* <HomeStack/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'start',
    overFlow:'hidden',
  },

});
