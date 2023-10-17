import A from '../components/a';
import styles from './page.module.scss';

export default function UserIndex() {
    return (
        <>
            <p>users list</p>
            <A text='add' href='users/add' />
            <br />
            <A text='edit' href='users/1/edit' />
        </>
    );
}