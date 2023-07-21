import NotFoundPage from '@/app/not-found';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';

interface Props {
    params: {
        slug: string;
    };
}

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름: ${params.slug}`,
    };
}

export default async function ProductPage({ params: { slug } }: Props) {
    const product = await getProduct(slug);

    if (!product) {
        return <NotFoundPage />;
    }
    return (
        <>
            <h1>{product.name} 제품 설명 페이지</h1>
            <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400} />
        </>
    );
}

export async function generateStaticParams() {
    const products = await getProducts();

    return products.map(product => ({
        slug: product.id,
    }));
}
