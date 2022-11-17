import Link from "next/link";
import Button from "../../Button";
import FormCard from "../../FormCard";
import Input from "../../Input";
import { formStyle } from "../ForgotPassword/style.css";
import { linkStyle } from "./style.css";

interface SignInProps extends React.HTMLAttributes<HTMLFormElement> {}

const SignIn: React.FC<SignInProps> = (props) => {
  return (
    <FormCard>
      <h2>Login</h2>
      <form {...props} className={formStyle}>
        <Input type="text" label="email" name="email" />
        <Input type="password" label="password" name="password" />
        <a href="/auth/for" className={linkStyle}>
          Forgot Password?
        </a>
        <Button>Login</Button>
      </form>
      <p>
        New to Alors?{" "}
        <a href="/auth/signup" className={linkStyle}>
          Register
        </a>
      </p>
    </FormCard>
  );
};

export default SignIn;
