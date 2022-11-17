import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import { formStyle } from "./style.css";

interface ForgotPasswordProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  error,
  loading = false,
  ...props
}) => (
  <FormCard>
    <h2>Forgot Password ? 😏</h2>
    <p>
      {
        "Don't worry! It happens. Please enter the address associated with your account."
      }
    </p>
    <form {...props} className={formStyle}>
      <Input
        label="email :"
        placeholder="emmanuel@elysee.fr"
        type="text"
        name="email"
      />
      {error && <Error title={error.title}>{error.message}</Error>}
      <Button busy={loading}>Submit</Button>
    </form>
  </FormCard>
);

export default ForgotPassword;
