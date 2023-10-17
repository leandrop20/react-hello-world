import styles from './page.module.scss';

export default function UserShow({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <>
            user show ({id})
        </>
    );
}