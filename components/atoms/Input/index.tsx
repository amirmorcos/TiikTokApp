import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";

const Input = ({
  overrideContainerStyle,
  lightColor,
  darkColor,
  name,
  control,
  ...props
}: InputProps) => {
  const placeholderColor = useThemeColor(
    { dark: darkColor, light: lightColor },
    "placeholder"
  );
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={[styles.container, overrideContainerStyle]}
          placeholderTextColor={placeholderColor}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          {...props}
        />
      )}
      name={name}
    />
  );
};

export default Input;
