import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomDrawer = () => {
  return (
    <View style={{backgroundColor:"blue", flex:1}}>
      <Text>CustomDrawer</Text>
      <Text>Profile</Text>
      <Text>Contact</Text>

    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})