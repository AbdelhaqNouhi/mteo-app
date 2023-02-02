import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const DaysWeather = ({data}) => {
  const [Temps, setTemps] = useState()
  const [activeCard, setActiveCard] = useState('day')
  useEffect(()=>{
    if (data.list) {
      setTemps(data.list[0].feels_like)
    }
  },[data,activeCard])  
  return (
    <>
    {
    Temps?
    <View style={styles.constainer}>
      <View style={[styles.Card,activeCard==='morn'? styles.active:null]} onClick={()=>setActiveCard('morn')}>
            <Text style={styles.text}> {Temps.morn}°</Text>
            <Text style={styles.text}>image</Text>
            <Text style={styles.textSm}>Morn</Text>
      </View>
      <View style={[styles.Card,activeCard==='eve'? styles.active:null]} onClick={()=>setActiveCard('eve')}>
            <Text style={styles.text}> {Temps.eve}°</Text>
            <Text style={styles.text}>image</Text>
            <Text style={styles.textSm}>Eve</Text>
      </View>
      <View style={[styles.Card,activeCard==='day'? styles.active:null]} onClick={()=>setActiveCard('day')}>
            <Text style={styles.text}> {Temps.day}°</Text>
            <Text style={styles.text}>image</Text>
            <Text style={styles.textSm}>Day</Text>
      </View>
      <View style={[styles.Card,activeCard==='night'? styles.active:null]} onClick={()=>setActiveCard('night')}>
            <Text style={styles.text}> {Temps.night}°</Text>
            <Text style={styles.text}>image</Text>
            <Text style={styles.textSm}>Night</Text>
      </View>
    </View>
      :null
    }
    </>
  )
}
const styles = StyleSheet.create({
  constainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    paddingBottom:'12px',
    width:'100%'
  },
  Card:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-around',
      // backgroundImage: `linear-gradient(to bottom, rgba(0, 204, 255, 1), rgba(0, 113, 255, 1))`,
      width:'80px',
      height:'110px',
      border:"1px solid grey",
      borderRadius:"30px",
      marginLeft:'5px',
      marginRight:'5px'
  },
  text:{
      color:'white',
      fontWeight:'600',
      fontSize:'16px'
    },
    textSm:{
      color:'grey',
      fontSize:'14px'

  },
  active:{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 204, 255, 1), rgba(0, 113, 255, 1))`,
    }
})
export default DaysWeather