import styles from './page.module.scss';

export default function UserEdit({ params }: { params: { id: string } }) {
    const { id } = params;

    return(
        <>
            user edit ({id})
        </>
    );
}