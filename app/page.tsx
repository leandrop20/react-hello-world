'use client';

import A from './components/a';
import styles from './page.module.scss';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
	// const { data: session } = useSession({
	// 	required: true,
	// 	onUnauthenticated() {
	// 		redirect('/api/auth/signin');
	// 	}
	// });

	// console.log(session?.user);

	return (
		<>
			<p>Home</p>
			<A text='users' href='users' />
			<button
				className='btn btn-danger'
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		</>	
	);
}
