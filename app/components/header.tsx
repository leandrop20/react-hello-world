'use client';

import styles from './header.module.scss';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
    const { data: session } = useSession();

    if (!session) return (<></>);

    return (
        <nav className={styles.header}>
            <Link href={'/home'} className='mx-3 text-white'>home</Link>
            <Link href={'/users'} className='mx-3 text-white'>users</Link>
            <Link
                href={{}}
                onClick={() => signOut()}
                className='mx-3 text-white'
            >
                sign out
            </Link>
        </nav>
    );
}