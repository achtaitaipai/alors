interface ForgotPasswordProps extends React.HTMLAttributes<HTMLFormElement> {}

import Button from "../../Button";
import FormCard from "../../FormCard";
import Input from "../../Input";
import { formStyle } from "./style.css";

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => (
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
        placeholder="john@doe.fr"
        type="text"
        name="email"
      />
      <Button>Submit</Button>
    </form>
  </FormCard>
);

export default ForgotPassword;
