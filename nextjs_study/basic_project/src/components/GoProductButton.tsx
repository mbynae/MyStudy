'use client';

import { useRouter } from 'next/navigation';

export default function GoProductButton() {
    const router = useRouter();
    const onClick = () => {
        router.push('/product');
    };

    return (
        <button onClick={onClick} style={{ display: 'block', cursor: 'pointer' }}>
            제품 페이지로 이동
        </button>
    );
}
