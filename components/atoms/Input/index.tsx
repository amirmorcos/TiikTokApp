import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";

const Input = ({ overrideContainerStyle, ...props }: InputProps) => {
  return (
    <TextInput style={[styles.container, overrideContainerStyle]} {...props} />
  );
};

export default Input;
