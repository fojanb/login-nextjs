import { BaseAuthLayout } from "../../components/Auth/Base";
import { RegisterForm } from "../../components/Auth/Register";

export default function Login() {
  return (
    <BaseAuthLayout>
      <RegisterForm />
    </BaseAuthLayout>
  );
}
