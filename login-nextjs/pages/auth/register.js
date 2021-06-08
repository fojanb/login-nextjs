import { BaseAuthLayout } from "../../components/Auth/Base";
import { RegisterForm } from "../../components/Auth/Register";

export default function Register() {
  return (
    <BaseAuthLayout>
      <RegisterForm />
    </BaseAuthLayout>
  );
}
