'use client';

import styles from './page.module.scss';
import Loading from './loading';
import { Suspense, useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState({ test: '' });

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {});
    });

    return (
        <>
            <Suspense fallback={<Loading />}>
                <p>::OLA HOME LOGGED::</p>
                <p>{data.test}</p>
            </Suspense>
        </>
    );
}