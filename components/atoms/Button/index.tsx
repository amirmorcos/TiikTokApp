import { ThemedText } from "@/components/ThemedText";
import { Pressable } from "react-native";
import { ButtonProps } from "./types";
import styles from "./styles";

const Button = ({
  onPress,
  title,
  disabled,
  overrideContainerStyle,
}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.container, overrideContainerStyle]}
      disabled={disabled}
      onPress={onPress}
    >
      <ThemedText lightColor="white">{title}</ThemedText>
    </Pressable>
  );
};

export default Button;
