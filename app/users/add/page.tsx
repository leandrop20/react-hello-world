'use client';

import { IUser } from '@/app/interfaces/IUser';
import styles from './page.module.scss';
import { useForm } from 'react-hook-form';

export default function UserAdd() {
    const { register, handleSubmit, formState: { errors } } = useForm<any>();
    const onSubmit = (data: IUser) => {
        console.log('send: ', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            className={`form-control ${errors.name ? 'is-invalid' : 'is-valid'}`}
                            type='text'
                            {...register('name', { required: true })}
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                            className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`}
                            type='email'
                            {...register('email', { required: true })}
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <button className='btn btn-success form-control'>
                        save
                    </button>
                </div>
            </div>
        </form>
    );
}