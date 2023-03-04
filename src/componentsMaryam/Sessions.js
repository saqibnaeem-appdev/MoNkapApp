import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View,Text, StyleSheet } from "react-native";
import Input from "../componentsMaryam/TextInput";


const Sessions=()=>{
    return(
        <View>
            <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{
              fontWeight:'400',
              fontSize:hp('1.8'),
              lineHeight:17


            }}>Sessions</Text>
            <Text
            style={{
              fontStyle:'italic',
              fontWeight:'400',
              fontSize:hp('1.3'),
              lineHeight:12,
              alignSelf:'center'
            }}
            > (Number of times everyone has to “chop” the Njangui)</Text>
          </View>
          <Input placeholder="number of sessions" />
        </View>
    )
}


const styles=StyleSheet.create({})


export default Sessions