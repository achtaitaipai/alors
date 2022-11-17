import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export const loginStory = () => <Login />;
loginStory.storyName = "Login";

export const signUpStory = () => <SignUp />;
signUpStory.storyName = "SignUp";

export const forgotPasswordStory = () => <ForgotPassword />;
forgotPasswordStory.storyName = "Forgot Password";

export const resetPasswordStory = () => <ResetPassword />;
resetPasswordStory.storyName = "Reset Password";
