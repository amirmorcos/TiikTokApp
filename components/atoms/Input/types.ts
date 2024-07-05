import { StyleProp, TextInputProps, TextStyle } from "react-native";

export type InputProps = TextInputProps & {
  overrideContainerStyle?: StyleProp<TextStyle>;
};
