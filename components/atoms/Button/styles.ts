import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { verticalScale } from "react-native-size-matters/extend";

export default StyleSheet.create({
  container: {
    height: verticalScale(44),
    backgroundColor: Colors.light.blue,
    borderRadius: 5,
    marginTop: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  disabled: {
    opacity: 0.5,
  },
});
