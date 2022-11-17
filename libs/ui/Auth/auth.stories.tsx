import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import { FormEvent, useState } from "react";

type Errormessage = {
  title?: string | undefined;
  message: string;
};
export const loginStory = () => {
  const [error, setError] = useState<Errormessage>();
  const [loading, setLoading] = useState(false);
  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError({ title: "Server Error", message: "ça marche pas !" });
  };

  return <Login loading={loading} onSubmit={handleClick} />;
};
loginStory.storyName = "Login";

export const signUpStory = () => (
  <SignUp error={{ title: "Server Error", message: "ça marche pas !" }} />
);
signUpStory.storyName = "SignUp";

export const forgotPasswordStory = () => (
  <ForgotPassword
    error={{ title: "Server Error", message: "ça marche pas !" }}
  />
);
forgotPasswordStory.storyName = "Forgot Password";

export const resetPasswordStory = () => (
  <ResetPassword
    error={{ title: "Server Error", message: "ça marche pas !" }}
  />
);
resetPasswordStory.storyName = "Reset Password";
