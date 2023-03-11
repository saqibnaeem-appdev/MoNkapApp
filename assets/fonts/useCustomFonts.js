/** @format */
import * as Font from "expo-font";

async function loadFonts() {
  await Font.loadAsync({
    GentiumBookBasic: require("../fonts/Gentium_Book_Basic.ttf"),
    GentiumBookBasicbold: require("../fonts/Gentium_Book_Basic_bold.ttf"),
    PopLight300: require("../fonts/Poppins_light.ttf"),
    PopRegular400: require("../fonts/Poppins_regular.ttf"),
    PopRegular500: require("../fonts/Poppins_medium.ttf"),
  });
}



export default loadFonts;
