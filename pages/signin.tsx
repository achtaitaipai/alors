import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Login from "../libs/ui/Auth/Login";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const signin = await supabase.auth.signInWithPassword({ email, password });
    supabase.auth.refreshSession();
    if (!signin.error) {
      router.push("/create");
    } else {
      setError(signin.error.message);
      setLoading(false);
    }
  };

  return (
    <Login
      onSubmit={handleSubmit}
      loading={loading}
      error={error ? { message: error } : undefined}
    />
  );
};

export default Page;
