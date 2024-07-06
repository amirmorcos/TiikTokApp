import Input from "@/components/atoms/Input";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import styles from "./styles";
import Button from "@/components/atoms/Button";
import { useForm } from "react-hook-form";

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

  const onSubmit = async (data: SigninFormData) => {
    try {
      const response = await fetch(
        "https://serverless.vibez.app/interviews/home_assignment_v2/login",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log("result", result);
    } catch (e) {}
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
