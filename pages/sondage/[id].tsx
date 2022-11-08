import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { GetSondageById } from '../../lib/db'

export async function getServerSideProps(context:GetServerSidePropsContext) {
  try {
    const id = context.params!.id as string
    return {props : {sondage: await GetSondageById(id)}}
  } catch (error) {
    console.log(error)
    return {props : {error : error}}
  }
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