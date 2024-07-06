import { Stack } from "expo-router";
import React from "react";

const AuthenticationStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index/index" />
    </Stack>
  );
};

export default AuthenticationStack;
