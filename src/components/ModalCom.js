/** @format */

import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const ModalComponent = ({ visible, onClose }) => {
  let [fontsLoaded] = useFonts({
    italic: require("../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const cardData = [
    {
      id: 1,
      status: "tranfer",
      time: "Jul 18th  - 5:30pm",
      name: "John Doe",
      bio: "Stella Claire Lum Nee Slamamangarie",
      image: require("../../assets/Deliverd.png"),
      imageStatus: require("../../assets/Transfer.png"),
      price: "21,000 XAF",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      status: "Request",
      time: "Jul 19th  - 5:30pm",
      name: "Jane Doe",
      bio: "Luis Nana Dibango Ebonggo",
      image: require("../../assets/Declined.png"),
      imageStatus: require("../../assets/Transfer.png"),
      price: "21,000 XAF",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageView}>
        <Text style={styles.title}>{item.status}</Text>
        <Text style={styles.title}>{item.time}</Text>
      </View>
      <View style={styles.cardTopContent}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={{ width: "70%" }}>
          <Text style={styles.title}>{item.bio.substring(0, 30) + "..."}</Text>
        </View>
      </View>
      <View style={styles.cardBottomContent}>
        <Image
          source={item.imageStatus}
          resizeMode="contain"
          style={styles.belowImagesStyle}
        />
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.subtitle}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <Modal isVisible={visible} onBackdropPress={() => onClose()}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={() => onClose()}>
          <Text style={{ fontFamily: "italic", fontSize: 25 }}>Close</Text>
        </TouchableOpacity>
        <SafeAreaView style={styles.safeAreaContainer}>
          <FlatList
            data={cardData}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.white,
    alignSelf: "center",
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: Colors.greyDark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    alignSelf: "center",
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "100%",
  },
  imageView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardTopContent: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontFamily: "italic",
    fontSize: 18,
  },
  cardBottomContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    alignSelf: "flex-end",
  },
  image: {
    width: 70,
    height: 35,
  },
  subtitle: {
    fontFamily: "italic",
    fontSize: 18,
  },
  belowImagesStyle: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default ModalComponent;
