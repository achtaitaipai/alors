import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ForgotPassword from "../libs/ui/Auth/ForgotPassword";
import ResetPassword from "../libs/ui/Auth/ResetPassword";
interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formDatas = new FormData(form);
    const resetPasswordResponse = await fetch("/api/reset", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: formDatas.get("email") }),
    });
    if (resetPasswordResponse) setLoading(false);
    setSuccess("Please check your email for the reset.");
  };

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formDatas = new FormData(form);
    const password = formDatas.get("password") as string;
    const update = await supabase.auth.updateUser({
      email: user?.email,
      password,
    });
    if (!update.error) {
      router.push("/profile");
    } else {
      setError(update.error.message);
      setLoading(false);
    }
  };

  if (!user)
    return (
      <ForgotPassword
        onSubmit={handleSubmit}
        success={success}
        loading={loading}
        error={error ? { message: error } : undefined}
      />
    );
  else
    return (
      <ResetPassword
        onSubmit={updateUser}
        succes={success}
        error={error ? { message: error } : undefined}
        loading={loading}
      />
    );
  return null;
};

export default Page;
