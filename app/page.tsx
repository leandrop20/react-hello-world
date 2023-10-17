// 'use client';

import { getServerSession } from 'next-auth';
import A from './components/a';
import styles from './page.module.scss';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { authOptions } from './lib/auth';

export default async function Home() {
	const session = await getServerSession(authOptions);

	// const { status } = useSession({
	// 	required: true,
	// 	onUnauthenticated() {
	// 		redirect('/api/auth/signin');
	// 	},
	// });

	// if (status === 'loading') {
	// 	return <p>Loading...</p>;
	// }

	return (
		<>
			<p>Home</p>
			<A text='users' href='users' />
			<button
				className='btn btn-danger'
				// onClick={() => signOut()}
			>
				Sign Out
			</button>
		</>	
	);
}
