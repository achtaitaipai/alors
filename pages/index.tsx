import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { supabase } from "../libs/supabase";

type Sondage = {
  id: number;
};

export default function Home() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius ducimus
        sint, explicabo quam illum ipsam cumque modi maxime pariatur nostrum
        iusto sed hic saepe ipsum vero? Sit officiis aliquam asperiores?
      </div>
      <Link href="/create">Créer mon sondage</Link>
      {/* <pre>{user?.email}</pre> */}
      {/* <button
				onClick={async () => {
					//user ? await supabaseClient.auth.signOut()
					user ? NavigationPreloadManager()
				}}
			>
				click here to log out
			</button> */}
    </div>
  );
}
