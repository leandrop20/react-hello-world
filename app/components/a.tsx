import styles from './a.module.scss';
import Link from "next/link";

export default function A({ href, text }: { href: string, text: string }) {
    return (
        <Link className='btn btn-success' href={href}>{text}</Link>
    );
}