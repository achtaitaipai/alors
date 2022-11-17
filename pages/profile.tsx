"use client"
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabase'

export default function Profile() {
    const supabaseClient = useSupabaseClient()
	const user = useUser()
    const router = useRouter()
    const [sondagesFromDB, setSondagesFromDB] = useState<any[]>([])

    useEffect(()=>{
        if(!user){
            router.push("/")
        }
    },[user,router])

    useEffect(()=>{
		const getSondages = async (user_id:string) => {
            const sondageStructured = [];
			const { data : sondagesData, error } = await supabase
			.from("sondages")
			.select()
			.eq("user_id",user_id)
            //console.log("finish getting sondages")
			if (sondagesData) {
                for(var i=0;i<sondagesData.length;i++){
                    var curSondage:{id:string,images:any[]} = {id:sondagesData[i].id, images:[]}
                    const { data : imagesData, error } = await supabase
                    .from("images")
                    .select()
                    .eq("sondage_id",sondagesData[i].id)
                    //console.log("finish getting images")
                    if (imagesData) {
                        for(var j=0;j<imagesData.length;j++){
                            var curImage:{id:string,path:string,votes:any[]} = {id:imagesData[j].id, path:imagesData[j].path, votes:[]}
                            const { data : votesData, error } = await supabase
                            .from("votes")
                            .select()
                            .eq("image_id",imagesData[j].id)
                            //console.log("finish getting votes")
                            if (votesData) {
                                curImage.votes = votesData
                            } else if (error) {
                                console.log("error when fetching images's votes")
                                console.log(error)
                            }
                            curSondage.images.push(curImage)
                        }
                        sondageStructured.push(curSondage)
                    } else if (error) {
                        console.log("error when fetching sondages's images")
                        console.log(error)
                    }
                }
                console.log(sondageStructured)
                setSondagesFromDB(sondageStructured)
			} else if (error) {
				console.log("error when fetching user's sondages")
				console.log(error)
			}
		}

        if(user?.id){
            getSondages(user.id)
        }
	},[user])

	return (
		<div>
            <span>{user?.email}</span>
            <button
				onClick={async () => {await supabaseClient.auth.signOut()}}
			>
				click here to log out
			</button>
            <Link href={'/create'}>Créer un nouveau sondage</Link>
            <span>Mes {sondagesFromDB.length} sondages :</span>
            {sondagesFromDB.map((sondage, index) => (
                <div key={index}>
                    <span>Sondage id : {sondage.id}</span>
                    <span>images : {sondage.images.length}</span>
                    {sondage.images.map((image, index) => (
                        <div key={index}>
                            <img style={{width:"100px"}} src={"https://frvfirqdhvlyukdegtwi.supabase.co/storage/v1/object/public/images/"+image.path} alt=""/>
                            <span>votes : {image.votes.length}</span>
                            {image.votes.map((vote, index) => (
                                <div key={index}>
                                    <span>vote value : {vote.value}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
		</div>
	)
}
