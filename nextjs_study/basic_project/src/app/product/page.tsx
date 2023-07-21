import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/service/products';
import CatsFact from '@/components/CatsFact';
import styles from './page.module.css';
import clothImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

const page = async () => {
    const products = await getProducts();

    return (
        <>
            <h1>제품 소개 페이지</h1>
            <div>
                <Image src={clothImage} alt="옷" className={styles.clothes} />
            </div>
            <ul className={styles.ul}>
                {products.map(({ id, name }, index) => (
                    <li key={index}>
                        <Link href={`/product/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <CatsFact />
        </>
    );
};

export default page;
