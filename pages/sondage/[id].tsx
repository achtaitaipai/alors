import { getDocs, query, where } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { app } from '../../lib/db'

export async function getServerSideProps(context:GetServerSidePropsContext) {

  console.log(context.params?.id)
  
  const sondage = await getDocs(query(app, where("SondageId", "==", context.params?.id)))
  const data = sondage.docs.map(el => el.data())
  console.log(data)

  return {props : {sondage: data}}
}

type Datas = {
  sondage:any
}

export default function Sondage({sondage}:Datas) {

  const router = useRouter()
  const { id } = router.query

  console.log(sondage)

  return (
    <>
        <h1>Sondage id {id}</h1>
    </>
  )
}