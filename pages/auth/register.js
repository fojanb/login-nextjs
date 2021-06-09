import { BaseAuthLayout } from "../../components/Auth/Base";
import { RegisterForm } from "../../components/Auth/Register";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};
export default function Register() {
  return (
    <BaseAuthLayout>
      <RegisterForm />

      <div style={styles}>
        <Link href="/auth/login">Registered Before? Signin Now!</Link>
      </div>
    </BaseAuthLayout>
  );
}
