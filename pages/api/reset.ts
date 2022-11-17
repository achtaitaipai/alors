import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseBack } from "../../libs/supabaseBack";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const email = req.body.email as string;
    const { data, error } = await supabaseBack.auth.resetPasswordForEmail(
      email,
      { redirectTo: "http://localhost:3000/reset" }
    );
    res.status(error ? 500 : 200).json({ data, error });
  } else res.status(400);
}
