'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login({ params }: { params: { callbackUrl: string } }) {    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const callbackUrl = decodeURI(params.callbackUrl! ?? '/home');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        
        const result = await signIn('credentials', {
            username,
            password,
            callbackUrl: '/',
            redirect: false
        });

        if (result?.error) {
            setError(result.error);
        }
        
        if (result?.ok) {
            router.push(callbackUrl);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                !!error &&
                <div className='row'>
                    <div className='col-12'>ERROR: {error}</div>
                </div>
            }
            <div className='row'>
                <div className='col-12'>
                    <input
                        type="text"
                        value={username}
                        placeholder='username'
                        className='form-control'
                        onChange={(e) => { setUsername(e.target.value); }}
                    />
                </div>
                <div className='col-12'>
                    <input
                        type="password"
                        value={password}
                        placeholder='password'
                        className='form-control'
                        onChange={(e) => { setPassword(e.target.value); }}
                    />
                </div>
                <div className='col-12'>
                    <button className='btn btn-primary'>Sign In</button>
                </div>
            </div>
        </form>
    );
}