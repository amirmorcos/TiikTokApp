import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { ThemedText } from "@/components/ThemedText";
import { useAppDispatch } from "@/store";
import { hideLoading, showLoading } from "@/store/appSlice";
import { useSigninMutation } from "@/store/authenticationApi";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";
import { storeUser } from "@/store/userSlice";

type SigninFormData = {
  username: string;
  password: string;
};
const SigninScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [signIn] = useSigninMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SigninFormData) => {
    dispatch(showLoading());
    const response = await signIn(data);
    if (!response.error) {
      dispatch(storeUser(response.data));
    }
    dispatch(hideLoading());
  };

  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold" style={styles.title}>
        TikTok App
      </ThemedText>
      <Input
        control={control}
        name="username"
        overrideContainerStyle={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <Input
        control={control}
        name="password"
        overrideContainerStyle={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        overrideContainerStyle={styles.button}
        onPress={handleSubmit(onSubmit)}
        title="Login"
        disabled={Object.keys(errors).length !== 0}
      />
    </View>
  );
};

export default SigninScreen;
