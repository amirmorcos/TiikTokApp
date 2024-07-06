import { useAppSelector } from "@/store";
import { Stack } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";

const MainNavigation = () => {
  const { isLoading } = useAppSelector((selector) => selector.app);
  return (
    <>
      <Stack>
        <Stack.Screen name="(signin)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
      <Spinner visible={isLoading} />
    </>
  );
};

export default MainNavigation;
