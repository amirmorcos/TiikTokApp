import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters/extend";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.light.medGray,
    height: verticalScale(44),
    borderRadius: 5,
    width: "100%",
    borderWidth: 0.2,
    borderColor: "#000000",
    paddingHorizontal: scale(20),
  },
});
