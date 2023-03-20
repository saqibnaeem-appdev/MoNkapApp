import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Label=({label})=>{
    let [fontsLoaded] = useFonts({
        // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
        "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
        "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    return(
        <View>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    label:{
        fontSize:15,
        fontWeight:'400',
        // lineHeight:15,
        lineHeight:17,
        fontFamily:'Gentium-Basic',
        margin:hp('0.3')
    }
})


export default Label