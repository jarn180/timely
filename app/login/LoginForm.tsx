import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <Box className="space-y-4">
      <Button size="lg" variant="outline" action="primary" className="mb-2">
        <ButtonText>Login</ButtonText>
      </Button>
      <Button size="lg" variant="outline" action="primary">
        <ButtonText>Signup</ButtonText>
      </Button>
    </Box>
  );
}
