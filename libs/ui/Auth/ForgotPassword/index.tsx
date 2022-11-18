import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import Success from "../../Success";
import { formStyle } from "./style.css";

interface ForgotPasswordProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
  success?: string;
}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  error,
  loading = false,
  success,
  ...props
}) => (
  <FormCard>
    <h2>Forgot Password ? 😏</h2>
    <p>
      {
        "Don't worry! It happens. Please enter the address associated with your account."
      }
    </p>
    <form {...props} className={formStyle} method="post" action="/api/reset">
      <Input
        label="email :"
        placeholder="emmanuel@elysee.fr"
        type="text"
        name="email"
        required
      />
      {success && <Success>{success}</Success>}
      {error && <Error title={error.title}>{error.message}</Error>}
      <Button busy={loading}>Submit</Button>
    </form>
  </FormCard>
);

export default ForgotPassword;
