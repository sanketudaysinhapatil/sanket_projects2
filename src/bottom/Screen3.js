import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text onPress={()=>{
        navigation.openDrawer()
      }} style={{color:"red"}}>Screen 3</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})