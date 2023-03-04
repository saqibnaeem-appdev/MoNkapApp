/** @format */

import React from "react";
import {
  Modal,
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Colors from "../../assets/theme/Colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MyModal = ({ visible, closeModal }) => {
  return (
    <Modal visible={visible}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <Button title="Close" onPress={closeModal} />
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 100,
    backgroundColor: Colors.transparent,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyModal;
