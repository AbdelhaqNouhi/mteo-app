import { View, Text ,StyleSheet,FlatList,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
export default function NextDaysWeather(props) {
  const [data, setData] = useState()
  const img = {uri: 'http://openweathermap.org/img/wn/%27'}

  useEffect(()=>{
    if (props.route.params.data) {
      setData(props.route.params.data)
    }
  },[props])
if (data) {
  console.log(data.list);
}
  return (
      <View style={styles.container}>
      {
        data?
        <FlatList contentContainerStyle={{width: '100vw'}} data={data.list} 
          renderItem={({item})=>
          <View style={styles.dayCard}>
            <Text style={styles.text} > {new Date(item.dt*1000).toLocaleString('en-us', { weekday: 'long' })} </Text>
            <Text style={styles.text} >{item.weather[0].main}</Text>
            {/* <Text style={styles.text} > {img.uri+item.weather[0].icon+'@4x.png'} </Text> */}
            {/* <Image style={styles.dayCard.icons} source={img+item.weather[0].icon+'@4x.png'}/> */}
            <Image style={styles.dayCard.icons} source={img.uri+item.weather[0].icon+'@4x.png'}/>
            <Text style={styles.text} >{item.temp.day}°</Text>
          </View>
        }
        />
        :null
      }
      </View>

  )
}
const styles = StyleSheet.create({
  container:{
    height:'92vh',
    width:'100%',
    backgroundColor:'black',
    display:'flex',
    flexDirection:'column',
    // marginBottom:'5px',
    alignItems:'center',
    justifyContent:'flex-end'
  },
  text:{
    color:'#FFF',
    fontSize:'18px'
  },
  dayCard:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    marginTop:'15px',
    padding:'20px',
    icons:{
      width:'40px',
      height:'40px'
    }
  }
})