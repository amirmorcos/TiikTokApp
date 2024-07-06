import Reactotron from "reactotron-react-native";

Reactotron.configure({
  name: "TikTok",
}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect();
