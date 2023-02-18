/** @format */

import { useFonts } from "expo-font";

const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    GentiumBookBasic: require("../fonts/Gentium_Book_Basic.ttf"),
    GentiumBookBasicbold: require("../fonts/Gentium_Book_Basic_bold.ttf"),
  });
  return fontsLoaded;
};

export default useCustomFonts;
