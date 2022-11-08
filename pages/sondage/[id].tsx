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

  const curseur = 0;

  //cookies buisness
  //if(cookie[sondage[0].SondageId]){
  //  curseur = cookie[sondage[0].SondageId]
  //} else {
  //   create cookie sondage[0].SondageId = curseur a 0
  //  curseur = 0
  //}

  //


  console.log(sondage)
  async function vote(id:string,value:number){
    fetch('/api/vote',{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id,value})
    })
  }

  type Images = {file:string,commentaire:string}[]

  async function createSondage(images:Images){
    fetch('/api/createSondage',{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({images})
    })
  }

  return (
    <>
        <h1>Sondage id {sondage[0].SondageId}</h1>
        <span>Vote for image {sondage[0].id} ({sondage[0].File})</span>
        <button onClick={()=>vote(sondage[0].id,3)}>vote value 3</button>
        <button onClick={()=>createSondage([
          {file:"ABCDEFG",commentaire:"test"},
          {file:"123ABCDEFG",commentaire:"test2"},
          {file:"ABCDEFG123",commentaire:"test3"}
        ])}>create sondage</button>
        {/* <Choice image={sondage[curseur]}/> */}
    </>
  )
}