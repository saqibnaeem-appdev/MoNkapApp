import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react';
import { AntDesign } from '@expo/vector-icons/build/Icons';


const IconCompo = ({size,Colors,name}) => {
  return (
    <View>
       <AntDesign
            name={name}
            size={size}
            color={Colors}
           
          />
    </View>
  )
}

export default IconCompo

const styles = StyleSheet.create({})