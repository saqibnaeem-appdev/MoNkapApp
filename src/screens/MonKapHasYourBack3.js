import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
const window = Dimensions.get("window");
const { width, height } = window;
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HeaderCom from "../components/HeaderCom";
import { useNavigation } from "@react-navigation/native";
import MyTextInput from "../components/MyTextInput";

const images = [
  { id: 1, name: "House", source: require("../../assets/group45.png") },
];

//

const MonKapHasYourBack3 = () => {
  const [choosePlan, setChoosePlan] = useState("");
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [openCalendarModal2, setOpenCalendarModal2] = useState(false);
  const navigation = useNavigation();
  const [value, setValue] = useState();

  const renderItem = ({ item }) => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <Image
        source={item.source}
        style={{ width: 30, height: 30, marginRight: 3 }}
      />
      <Text style={{ fontSize: 10 }}>{item.name}</Text>
    </View>
  );

  return (
    <>
      <HeaderCom
        onPress={() => navigation.goBack()}
        text={"MoNKap Has Your Back"}
      />

      <View
        style={{
          width: wp("90%"),
          alignSelf: "center",
          marginVertical: hp("2%"),
          alignItems: "center",
        }}
      >
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          // horizontal={true}
        />
      </View>

      <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
        <Text style={{ fontWeight: "500" }}>
          How Much you will save toward{" "}
        </Text>
        <Text style={{ fontWeight: "500" }}>buying a house</Text>
        <View style={{ width: wp("80%"), marginTop: 10, marginBottom: 10 }}>
          <MyTextInput
            text={"Amount"}
            placeholder={"Enter Amount for saving"}
          />
        </View>
      </View>

      <View
        style={{
          width: wp("90%"),
          alignSelf: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <View
          //   onPress={() => setChoosePlan("Monthly")}
          style={{
            width: wp("90%"),
            height: hp("22%"),
            marginTop: 10,
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <Text style={{ marginVertical: 5, fontWeight: "500" }}>
            Select a payment method to make saving{" "}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity onPress={() => setOpenCalendarModal(true)}>
              <Image
                style={{ width: wp("20%"), height: hp("7%"), marginRight: 15 }}
                source={require("../../assets/momo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => setOpenCalendarModal(!openCalendarModal)}>
              <Image
                style={{
                  width: wp("15%"),
                  height: hp("6.5%"),
                  borderRadius: 10,
                  marginRight: 15,
                }}
                source={require("../../assets/OMoneyLogo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenCalendarModal2(!openCalendarModal2)}>
              <Image
                style={{ width: wp("20%"), height: hp("7%"), marginRight: 15 }}
                source={require("../../assets/expres-union-1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenCalendarModal2(!openCalendarModal2)}>
              <Image
                style={{ width: wp("18%"), height: hp("7%") }}
                source={require("../../assets/download-1.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => setOpenCalendarModal2(!openCalendarModal2)}>
              <Image
                style={{ width: wp("20%"), height: hp("7%"), marginRight: 15 }}
                source={require("../../assets/download-4-1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenCalendarModal2(!openCalendarModal2)}>
              <Image
                style={{
                  width: wp("15%"),
                  height: hp("6.5%"),
                  borderRadius: 10,
                  marginRight: 15,
                }}
                source={require("../../assets/download-3-1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenCalendarModal2(!openCalendarModal2)}>
              <Image
                style={{ width: wp("20%"), height: hp("7%"), marginRight: 15 }}
                source={require("../../assets/yup.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image
                style={{ width: wp("18%"), height: hp("7%") }}
                source={require("../../assets/fcfa-1.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openCalendarModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!openCalendarModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ position: "absolute", alignSelf: "flex-end" }}>
                
                <TouchableOpacity 
                 onPress={() => setOpenCalendarModal(!openCalendarModal)}
                >

                <Entypo
                  style={{ marginRight: 10, marginTop: 10 }}
                  name="cross"
                  size={25}
                  color={"red"}
                  />
                  </TouchableOpacity>
              </View>

              <View
                style={{
                  width: wp("80%"),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  You are about to make a payment of 18,000 XAF From MoMo to
                  your Target Saving
                </Text>
              </View>
              <View
                style={{
                  width: wp("80%"),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  Please input your secret pincode to confirm this transaction.
                  Note, this transaction cannot be cancelled after this
                </Text>
              </View>

              <View
                style={{
                  width: wp("50%"),
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 100,
                }}
              >
                <TextInput
                  style={{
                    width: wp("80%"),
                    borderWidth: 1,
                    borderColor: "blue",
                    height: hp("5%"),
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
                  // placeholder={"placeholder"}
                  keyboardType={"default"}
                  value={value}
                  onChangeText={(value) => setValue(value)}
                  //   textAlignVertical={textAlignVertical}
                />
              </View>

              <View style={{width:wp('80%'),alignSelf:'center',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

                <TouchableOpacity 
                 onPress={() => setOpenCalendarModal(!openCalendarModal)}
                style={{paddingHorizontal:15,paddingVertical:5,borderRadius:5, backgroundColor:'#E20909'}}>
                  <Text style={{color:'white'}}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => setOpenCalendarModal(false)}
                style={{paddingHorizontal:15,paddingVertical:5,borderRadius:5, backgroundColor:'#0000EE'}}>
                  <Text style={{color:'white'}}>SEND</Text>
                </TouchableOpacity>

              </View>

             
            </View>
          </View>
        </Modal>
        {/* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setOpenCalendarModal(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable> */}
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openCalendarModal2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!openCalendarModal2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ position: "absolute", alignSelf: "flex-end" }}>
                
                <TouchableOpacity 
                 onPress={() => setOpenCalendarModal2(!openCalendarModal2)}
                >

                <Entypo
                  style={{ marginRight: 10, marginTop: 10 }}
                  name="cross"
                  size={25}
                  color={"red"}
                  />
                  </TouchableOpacity>
              </View>

              <View
                style={{
                  width: wp("80%"),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                Sorry, this payment method is not associated to Target Savings
                </Text>
              </View>
              <View
                style={{
                  width: wp("80%"),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ textAlign: "center" }}>
                Click here “Create An Account” to add one
                </Text>
              </View>

            

             

             
            </View>
          </View>
        </Modal>
        {/* <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setOpenCalendarModal(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable> */}
      </View>
      {/* <View
              style={[
                styles.topPara,
                {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                },
              ]}
            >
              <View>
                <Image source={require("../../assets/icons8moneybox64-1.png")} />
                <Text style={styles.bluetext}>Small Projects</Text>
              </View>
              <View>
                <Text style={styles.bluetext}>We dey with you</Text>
                <Image source={require("../../assets/arrow-9.png")} />
              </View>
              <View>
                <Image source={require("../../assets/icons8moneybox55-1.png")} />
                <Text style={styles.bluetext}>Big Projects</Text>
              </View>
            </View> */}

      {/* <View style={styles.topPara2}>
              <Text style={styles.topText}>
                Enjoy the best and reliable saving by securing your money for the
                future
              </Text>
            </View>
      
            <View style={styles.topPara3}>
              <Text style={styles.topText}>
                Wether you are planning to buy a phone, a plot, build a house ,
                prepare for your kids back to school, plan for a trip........ MoNkap
                is a patner you can rely on.
              </Text>
            </View>
       */}

      <View style={styles.TotalBalance}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyTargetSaving")}
          style={styles.deposit}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MonKapHasYourBack3;

const styles = StyleSheet.create({
  centeredView: {
    // width:wp('100%'),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: wp("90%"),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  topPara: { width: wp("90%"), alignSelf: "center", justifyContent: "center" },
  topPara2: {
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: hp("5%"),
  },
  topPara3: {
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: hp("7%"),
  },
  topText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  bluetext: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: "#0000EE",
  },
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("2%"),
    // backgroundColor: "white",
  },
  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "blue",
    padding: 10,
  },
  TotalBalanceInput: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  TotalBalance: {
    width: wp("70%"),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("22%"),
    backgroundColor: "white",
  },
  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("70%"),
    backgroundColor: "blue",
    padding: 10,
  },
  AmountBtn: {
    // marginTop: hp("10%"),
    // marginLeft: wp("67%"),
    position: "absolute",
  },
  AmountBtnCalendar: {
    marginTop: hp("10%"),
    marginLeft: wp("75%"),
    position: "absolute",
  },
  SXFView: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: wp("23%"),
    height: hp("5%"),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("4%"),
  },
  SXFViewCalendar: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: wp("15%"),
    height: hp("5%"),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("4%"),
  },
  SXFImage: {
    width: wp("7%"),
    height: hp("4%"),
    marginTop: 3,
    marginLeft: wp("4%"),
  },
  SXFImageCalendar: {
    width: wp("6%"),
    height: hp("4%"),
    marginBottom: 5,
    // marginLeft: wp("4%"),
  },
  sendToParent: {
    backgroundColor: "white",
    width: wp("90%"),
    flexDirection: "row",
  },
  sendTOBtn: {
    marginTop: 17,
    marginLeft: wp("80%"),
    position: "absolute",
  },

  sendToImage: { width: wp("10%"), height: hp("6%") },
});
