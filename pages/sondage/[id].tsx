import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { useCursorStore } from '../../libs/stores/sondageCursor'
import { supabase } from '../../libs/supabase'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const id = context.params!.id as string
		return { props: { id: id } }
	} catch (error) {
		console.log(error)
		return { props: { error: error } }
	}
}

type Datas = {
	sondage: any
}

export default function Sondage({ sondage }: Datas) {
	const router = useRouter()
	const { id } = router.query as {id:string}
	const [sondageFromDB, setSondageFromDB] = useState<any[]>([])

	//query si l'id existe, sinon afficher un message d'erreur
	useEffect(()=>{
		const getSondage = async () => {
			const { data, error } = await supabase
			.from("images")
			.select()
			.eq("sondage_id",id);
	
			if (data) {
				setSondageFromDB(data)
			} else if (error) {
				alert("sondage "+id+" introuvable")
				console.log(error)
			}
		}

		getSondage()
	},[id])


	const cursors = useCursorStore(state => state.cursors)
	const currentCurosr = useMemo(() => cursors[id], [cursors, id])
	const newCursor = useCursorStore(state => state.addCursor)
	const incr = useCursorStore(state => state.incrCursor)
	useEffect(()=>{
		if(currentCurosr === undefined){
			newCursor(id)
		}
	},[id,currentCurosr,newCursor])
	
	async function vote(value:number){
		//register vote
		console.log("voting with value " + value)
		const { data, error } = await supabase.from("votes")
		.insert([{
			image_id: sondageFromDB[currentCurosr].id,
			value : value
		}]);

		//go to next image
		incr(id)
	}

	return <>
		{currentCurosr < sondageFromDB.length &&
		<>
			<img src={"https://frvfirqdhvlyukdegtwi.supabase.co/storage/v1/object/public/images/"+sondageFromDB[currentCurosr].path} alt="" />
			<button onClick={()=>vote(0)} >vote with value 0</button>
			<button onClick={()=>vote(1)} >vote with value 1</button>
			<button onClick={()=>vote(2)} >vote with value 2</button>
			<button onClick={()=>vote(3)} >vote with value 3</button>
			<button onClick={()=>vote(4)} >vote with value 4</button>
		</>
		}
		{currentCurosr === sondageFromDB.length &&
		<>
			<span>Sondage termnié, merci</span>
		</>
		}
	</>
}
