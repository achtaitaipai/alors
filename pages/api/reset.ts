import type { NextApiRequest, NextApiResponse } from 'next'
import { supabaseBack } from '../../libs/supabaseBack'

type Data = {
	result: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === 'POST') {
		const email = req.body.email
		const { data, error } = await supabaseBack.auth.resetPasswordForEmail(email, { redirectTo: 'http://localhost:3000/reset' })
		console.log({ email, data, error })
		res.redirect(307, '/')
	} else res.status(200).json({ result: 'OK' })
}
