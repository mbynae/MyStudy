import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from 'next';

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: '멋진 옷 ㅍㅍ',
    description: '멋진 옷이나 보고 가요',
};

export default function ProductsLayout({ children }: Props) {
    return (
        <>
            <nav className={styles.list}>
                <Link href="/products/man">남성옷</Link>
                <Link href="/products/woman">여성옷</Link>
            </nav>
            <section className={styles.products}>{children}</section>
        </>
    );
}
