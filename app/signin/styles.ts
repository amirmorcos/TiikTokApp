import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters/extend";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    padding: scale(20),
  },
  title: {
    fontSize: moderateScale(20),
  },
  input: {
    marginTop: verticalScale(20),
  },
  button: {
    marginTop: verticalScale(40),
  },
});
