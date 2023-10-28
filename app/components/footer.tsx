'use client';

import styles from './footer.module.scss';
import { useSession } from 'next-auth/react';

export default function Footer() {
    const { data: session } = useSession();
    const date = new Date();

    if (!session) return (<></>);

    return (
        <footer className={styles.footer}>
            @{date.getFullYear()}
        </footer>
    );
}