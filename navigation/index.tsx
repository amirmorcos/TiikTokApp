import { useAppSelector } from "@/store";
import Spinner from "react-native-loading-spinner-overlay";
import TabLayout from "./tabs";

import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "@/app/signin";

const Stack = createStackNavigator();

const MainNavigation = () => {
  const { isLoading } = useAppSelector((selector) => selector.app);
  const { user } = useAppSelector((selector) => selector.userState);

  return (
    <>
      {!user?.token && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="signin/index" component={SigninScreen} />
        </Stack.Navigator>
      )}

      {user?.token && <TabLayout />}

      <Spinner visible={isLoading} />
    </>
  );
};

export default MainNavigation;
