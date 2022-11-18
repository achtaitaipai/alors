import Link from "next/link";
import BasicLink from "../../BasicLink";
import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import Success from "../../Success";
import { formStyle } from "./style.css";

interface SignUpProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
  success?: string;
}

const SignUp: React.FC<SignUpProps> = ({
  error,
  loading = false,
  success,
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
          required
        />
        <Input type="password" name="password" label="password :" required />
        {error && <Error title={error.title}>{error.message}</Error>}
        {success ? (
          <Success>{success}</Success>
        ) : (
          <Button busy={loading}>Continue</Button>
        )}
      </form>
      {!success && (
        <p>
          <BasicLink href={"/signin"} variant="small">
            {" "}
            Already have an account ?
          </BasicLink>
        </p>
      )}
    </FormCard>
  );
};

export default SignUp;
