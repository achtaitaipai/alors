import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import Input from "../../Input";
import Success from "../../Success";
import { formStyle } from "./style.css";

interface ResetPasswordProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
  succes?: string;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  error,
  loading = false,
  succes,
  ...props
}) => (
  <FormCard>
    <h2>Reset Password 🤣</h2>
    <form {...props} className={formStyle}>
      <Input type="password" name="password" label="new password :" />
      {succes && <Success>{succes}</Success>}
      {error && <Error title={error.title}>{error.message}</Error>}
      <Button busy={loading}>Reset</Button>
    </form>
  </FormCard>
);

export default ResetPassword;
