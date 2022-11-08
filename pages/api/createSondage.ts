import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateSondage, GetSondageById, Vote } from '../../lib/db'

type Data = {
    result: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    console.log("creating sondage with " + req.body.images.length + " images")
    CreateSondage(req.body.images, "user1")
    res.status(200).json({ result: 'OK' })
}