import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("Parent")
        }, 2000);
    },[])

  return (
    <View style={{ flex:1,backgroundColor:"white", alignItems:"center", justifyContent:"center", height:500}}>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})