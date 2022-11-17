import Button from "../../Button";
import Error from "../../Error";
import FormCard from "../../FormCard";
import { formCardStyle } from "../../FormCard/style.css";
import Input from "../../Input";
import { formStyle } from "./style.css";

interface ResetPasswordProps extends React.HTMLAttributes<HTMLFormElement> {
  error?: {
    title?: string;
    message: string;
  };
  loading?: boolean;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  error,
  loading = false,
  ...props
}) => (
  <FormCard>
    <h2>Reset Password 🤣</h2>
    <form {...props} className={formStyle}>
      <Input type="password" name="password" label="new password :" />
    </form>
    {error && <Error title={error.title}>{error.message}</Error>}
    <Button busy={loading}>Reset</Button>
  </FormCard>
);

export default ResetPassword;
