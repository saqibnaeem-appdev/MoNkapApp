/** @format */
import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    GentiumBookBasic: require("../fonts/Gentium_Book_Basic.ttf"),
    GentiumBookBasicbold: require("../fonts/Gentium_Book_Basic_bold.ttf"),
  });
}

// import { useFonts } from "expo-font";

// const useCustomFonts = () => {
//   let [fontsLoaded] = useFonts({
//     GentiumBookBasic: require("../fonts/Gentium_Book_Basic.ttf"),
//     GentiumBookBasicbold: require("../fonts/Gentium_Book_Basic_bold.ttf"),
//   });
//   return fontsLoaded;
// };

export default loadFonts;
