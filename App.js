/** @format */

import AppRout from "./src/navigations/AppRoute";
import { StatusBar, View } from "react-native";
import Colors from "./assets/theme/Colors.js";
function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      <AppRout />
    </>
  );
}
export default App;
