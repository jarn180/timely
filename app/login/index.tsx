import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import LoginForm from "./LoginForm";

export default function LoginScreen() {
  return (
    <Box className="flex-1 justify-center items-center bg-gray-100 px-4">
      <SafeAreaView>
        <Stack.Screen options={{ headerShown: false }} />
        <Heading size="2xl" className="text-center mb-4">
          Welcome to Timely
        </Heading>
        <LoginForm />
      </SafeAreaView>
    </Box>
  );
}
