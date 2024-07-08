import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeScreen from "@/app/homeScreen";

const Tabs = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        component={HomeScreen}
        name="homeScreen/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
