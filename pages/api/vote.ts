import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	result: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// console.log("voting for id : " + req.body.id + " with value " + req.body.value)
	res.status(200).json({ result: 'OK' })
}
