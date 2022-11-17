import Link from "next/link";
import BasicLink from "../../BasicLink";
import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import { formStyle } from "./style.css";

interface SignUpProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
}

const SignUp: React.FC<SignUpProps> = ({
  error,
  loading = false,
  ...props
}) => {
  return (
    <FormCard>
      <h2>Sign Up 🤗</h2>
      <form {...props} className={formStyle}>
        <Input
          type="email"
          name="email"
          label="email :"
          placeholder="emmanuel@elysee.fr"
        />
        <Input type="password" name="password" label="password :" />
        {error && <Error title={error.title}>{error.message}</Error>}
        <Button busy={loading}>Continue</Button>
      </form>
      <p>
        Joined us before ? <BasicLink href={"/auth/login"}>Login</BasicLink>
      </p>
    </FormCard>
  );
};

export default SignUp;
