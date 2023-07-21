import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '멋진 제품 사이트',
    description: '멋진 제품을 만드는 사이트 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className={styles.header}>
                    <h1>
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
