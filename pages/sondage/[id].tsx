import { getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { app } from '../../lib/db'

export async function getServerSideProps() {
  
  const sondage = await getDocs(app)
  console.log(sondage.docs[0].data())

  return {props : {sondages: (sondage.docs[0].data())}}
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