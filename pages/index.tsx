import {Button} from "../lib/ui/Button";

export default function Home() {
  return (
    <>
    <h1>Wesh ça marche</h1>
    <Button title="Clique" onClick={()=>console.log('cliqué')}/>
    </>
  )
}