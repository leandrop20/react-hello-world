'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ILogin } from '@/app/interfaces/ILogin';
import { register } from 'module';

export default function Login({ params }: { params: { callbackUrl: string } }) {
    const [formData, setFormData] = useState<ILogin>({
        username: '',
        password: '',
    });
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const callbackUrl = decodeURI(params.callbackUrl! ?? '/home');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        
        const result = await signIn('credentials', {
            username : formData.username,
            password: formData.password,
            callbackUrl: '/',
            redirect: false
        });

        if (result?.error) {
            setError(result.error);
        }
        
        if (result?.ok) {
            router.push(callbackUrl);
        }

        setIsLoading(false);
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
                        type='text'
                        name='username'
                        value={formData.username}
                        placeholder='username'
                        className='form-control'
                        onChange={handleChange}
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='col-12'>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        placeholder='password'
                        className='form-control'
                        onChange={handleChange}
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='col-12'>
                    <button
                        className='btn btn-primary'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading' : 'Sign In'}
                    </button>
                </div>
            </div>
        </form>
    );
}