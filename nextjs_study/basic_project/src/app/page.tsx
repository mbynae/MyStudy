import Image from 'next/image';
import styles from './page.module.css';
import Counter from '@/components/Counter';

export default function Home() {
    // console.log('이건 서버 컴포넌트');
    // console.log(os.hostname());

    return (
        <>
            <h1>메인 홈페이지</h1>
            <Counter />
            <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="메인사진"
                width={300}
                height={300}
                className={styles.image}
            />
        </>
    );
}
