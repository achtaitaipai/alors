"use client"
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabase'

export default function Create() {
	const supabaseClient = useSupabaseClient()
	const user = useUser()
    const router = useRouter()
    const [sondageCode, setSondageCode] = useState(null)

    useEffect(()=>{
        if(!user){
            router.push("/signin?succes_redirect=/create")
        }
    },[user,router])

    const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        let file;

        var errorDuringUpload = false
        var images = []

        for(var i=0;i<e.target.files.length;i++){
            file = e.target.files[i]
            const fileNameFinal = Date.now() + Math.random().toString(16).slice(2) + "." + file?.name.split('.').slice(-1);
            console.log("uploading " + file?.name + " as " + fileNameFinal)

            const { data, error } = await supabase.storage
            .from("images")
            .upload("public/"+fileNameFinal, file as File);
      
            if (data) {
                images.push({
                    path:"public/"+fileNameFinal,
                })
                // console.log("data from supabase.storage upload image")
                // console.log(data);
            } else if (error) {
                console.log(error);
                errorDuringUpload = true
            }
        }

        if(!errorDuringUpload && images.length >= 1){
            const { data, error } = await supabase.from("sondages")
            .insert([{
                user_id: user?.id
            }]).select()

            const sondage_id = data && data[0]?.id
            console.log(sondage_id)
      
            if (sondage_id) {
                // console.log("data from insert sondage")
                // console.log(data);

                for(var i=0;i<images.length;i++){
                    const { data, error } = await supabase.from("images")
                    .insert([{
                        path: images[i].path,
                        sondage_id : sondage_id
                    }]).select();
            
                    // if (data) {
                    //     console.log("data from insert image")
                    //     console.log(data);
                    // } else if (error) {
                    //     console.log("error from insert image")
                    //     console.log(error);
                    // }
                }

                setSondageCode(sondage_id)
            } else if (error) {
                console.log("error from insert sondage")
                console.log(error);
            }
        }

    };

	return (
		<div>
			<input multiple type="file" accept="image/*" id="file_input" onChange={(e) => { handleUpload(e) }}/>
            {sondageCode &&
                <span>URL de votre nouveau sondage : sondage.com/sondage/{sondageCode}</span>
            }
		</div>
	)
}
