import { error } from "console";
import Link from "next/link";
import BasicLink from "../../BasicLink";
import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import { formStyle } from "../ForgotPassword/style.css";
import { linkStyle } from "./style.css";

interface SignInProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
}

const SignIn: React.FC<SignInProps> = ({
  error,
  loading = false,
  ...props
}) => {
  return (
    <FormCard>
      <h2>Login 🏡</h2>
      <form {...props} className={formStyle}>
        <Input
          type="text"
          label="email :"
          name="email"
          placeholder="emmanuel@elysee.fr"
          required
        />
        <Input type="password" label="password :" name="password" required />
        <BasicLink
          href="/reset"
          className={linkStyle}
          variant="small"
          style={{ justifySelf: "end" }}
        >
          Forgot Password?
        </BasicLink>
        {error && <Error title={error.title}>{error.message}</Error>}
        <Button busy={loading}>Login</Button>
        <p style={{ justifySelf: "end" }}>
          <BasicLink href="/signup" variant="small">
            New to Alors?
          </BasicLink>
        </p>
      </form>
    </FormCard>
  );
};

export default SignIn;
