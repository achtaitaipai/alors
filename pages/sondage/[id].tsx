import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const id = context.params!.id as string
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
	const { id } = router.query

	return <>{id}</>
}
