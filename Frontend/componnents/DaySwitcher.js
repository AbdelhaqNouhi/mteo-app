import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const DaySwitcher = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.TextDay}>Today</Text>
        <Text style={styles.TotalDays}>7 days </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:'20px',
        paddingBottom:'20px',
        color:'white'
    },
    TextDay:{
        color:'white',
        fontWeight:'600',
        fontSize:'20px',
    },
    TotalDays:{
        color:'gray',
    }
})

export default DaySwitcher