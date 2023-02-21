import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const EnEOList = () => {
  return (
    <View style={{width:wp('90%'),alignSelf:'center',backgroundColor:'white',paddingHorizontal:5,marginVertical:5}}>
      <View style={styles.list}>
        <View>
          <Text style={styles.listText}>Meter ID </Text>
          <Text style={styles.listText}>276589414 </Text>
        </View>
        <View>
          <Text style={styles.listText}>Meter ID </Text>
          <Text style={styles.listText}>276589414 </Text>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "#F2FEF1", padding: 10 }}>
            <Text style={styles.listText}> view </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listText}>           </Text>
        </View>
        <View>
          <Text style={[styles.listText,{color:'#46FF6B'}]}>Paid </Text>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "#46FF6B", padding: 5 ,borderRadius:5}}>
            <Text style={styles.listText}> play </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <View>
          <Text style={styles.listText}>Amount </Text>
          <Text style={[styles.listText,{fontWeight:'500'}]}>5 000 XAF</Text>
        </View>
        <View>
          <Text style={styles.listText}>Month</Text>
          <Text style={styles.listText}>August </Text>
        </View>
        <View>
          <TouchableOpacity style={{ backgroundColor: "#F2FEF1", padding: 5 ,borderRadius:5}}>
            <Text style={styles.listText}> print <AntDesign name="download" size={15} /> </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EnEOList;

const styles = StyleSheet.create({
    listText: { fontSize: 12, lineHeight: 16 },
    listParent: {
      width: wp("90%"),
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: 2,
    },
    list: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
});
