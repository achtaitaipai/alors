import type { NextApiRequest, NextApiResponse } from 'next'
import { GetSondageById, Vote } from '../../lib/db'


type Data = {
    result: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    // console.log("voting for id : " + req.body.id + " with value " + req.body.value)
    Vote(req.body.id,req.body.value)
    res.status(200).json({ result: 'OK' })
}
