import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Nanum_Gothic } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.css';

const sans = Open_Sans({ subsets: ['latin'] });
const nanum = Nanum_Gothic({
    weight: '700',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '멋진 제품 사이트',
    description: '멋진 제품을 만드는 사이트 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={sans.className}>
                <header className={styles.header}>
                    <h1 className={nanum.className}>
                        <Link href="/">Demo Note</Link>
                    </h1>
                    <nav className={styles.nav}>
                        <Link href="/product">products</Link>
                        <Link href="/about">about</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
