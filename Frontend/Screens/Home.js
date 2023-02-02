import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import Weathershower from '../componnents/weathershower';
import DaysWeather from '../componnents/DaysWeather';
import DaySwitcher from '../componnents/DaySwitcher';
import * as Location from 'expo-location';


export default function Home({navigation}) {
  const [logged, setlogged] = useState(true)
  const [data, setData] = useState([])
  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  let text = 'Waiting..';
  let key = "f513209bdb0890ce3722a8b63edbb556"
  useEffect(()=>{
    const getCurrentLocation = async()=>{
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        // return;
      }
      
      let currentLocation = await Location.getCurrentPositionAsync({});
      if (errorMsg) {
        text = errorMsg;
      } else if (currentLocation) {
        setLatitude(currentLocation.coords.latitude)
        setLongitude(currentLocation.coords.longitude)
        // latitude = JSON.stringify(currentLocation.coords.latitude)
        // longitude = JSON.stringify(currentLocation.coords.longitude)
      }
    }
    getCurrentLocation()

  },[])
  useEffect(()=>{
    if (latitude&&longitude) {
      getWeather()
    }
  },[latitude,longitude])
  

  const getWeather = async()=>{
    await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=8&appid=${key}`)
    .then(res => res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  }
  return (
    <>
      <View style={styles.container}>
              <Weathershower data={data}/>
              <View style={styles.containerDaysSwitcher}>
                  <Text style={styles.TextDay}>Today</Text>
                  {/* <Text style={styles.TotalDays}>7 days </Text> */}
                <Button title="7 days" onPress={() => navigation.navigate('WeekWeather',{data})}/>
              </View>
              <View style={styles.days} >
                  <DaysWeather data={data}/>
              </View>
          </View>
    </>

  )
}
const styles = StyleSheet.create({

    container:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'black'
    },
    days:{
        display:"flex",
        flexDirection:'row',
        alignContent:'space-around',
        justifyContent:'space-around',
        width:'90%'
      },
    daySwitcher:{
      width:'80%',
    },
    text : {
      color: '#fff',
    },
    containerDaysSwitcher:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      width:'90%',
      paddingTop:'20px',
      paddingBottom:'20px',
      color:'white'
  },
  TextDay:{
      color:'white',
      fontWeight:'600',
      fontSize:'20px',
  },

})