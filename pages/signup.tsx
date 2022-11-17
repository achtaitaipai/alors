import { FormEvent, useState } from "react";
import { supabase } from "../libs/supabase";
import SignUp from "../libs/ui/Auth/SignUp";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const signin = await supabase.auth.signUp({ email, password });
    console.log(signin);
    if (signin.error) {
      setError(signin.error.message);
      setLoading(false);
    } else {
      setSuccess("Please check your email for the confirmation link.");
    }
  };

  return (
    <SignUp
      onSubmit={handleSubmit}
      loading={loading}
      error={error ? { message: error } : undefined}
      success={success}
    />
  );
};

export default Page;
