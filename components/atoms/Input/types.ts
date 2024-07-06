import { StyleProp, TextInputProps, TextStyle } from "react-native";

export type InputProps = TextInputProps & {
  name: string;
  control: any;
  lightColor?: string;
  darkColor?: string;
  overrideContainerStyle?: StyleProp<TextStyle>;
};
