import React from "react";
import { View,Text,StyleSheet,TextInput, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../assets/theme/Colors";
import Label from "../componentsMaryam/label";


const Xaf=({width})=>{
    return(
        <View>
             <Label label="Amount to Contribute" />
          <View
            style={{
              flexDirection: "row",
              // width:wp('100%'),
            //   backgroundColor: "pink",
            }}
          >
            <TouchableOpacity style={styles.touchable}>
              <Text
                style={{
                  color: Colors.white,
                }}
              >
                XAF
              </Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Please enter an amount"
              placeholderTextColor={Colors.placeholder}
              style={[styles.input,{width}]}
            />
          </View>

        </View>
    )
}

const styles=StyleSheet.create({
    touchable: {
      backgroundColor: Colors.blue,
      alignItems: "center",
      justifyContent: "center",
      padding: hp("1.4"),
      paddingHorizontal: hp("2"),
      // width:wp('15'),
      borderRadius: 3,
      // position:'absolute',
      alignSelf: "center",
      },
      input: {
        backgroundColor: Colors.white,
        borderWidth: 0.3,
        borderColor: Colors.blue,
        // borderRadius: 3,
        padding: hp("1.3"),
        color: Colors.placeholder,
        fontSize: hp(1.2),
        fontWeight: "400",
        lineHeight: 12,
        width: wp("71"),
        height: hp("5.2"),
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
      },
})

export default Xaf