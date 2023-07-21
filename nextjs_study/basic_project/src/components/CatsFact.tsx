'use client';

import { useEffect, useState } from 'react';
import styles from './CatsFact.module.css';

const CatsFact = () => {
    const [text, setText] = useState('데이터 준비중');

    useEffect(() => {
        const res = fetch('https://meowfacts.herokuapp.com')
            .then(res => res.json())
            .then(data => setText(data.data[0]));
    }, []);

    return (
        <div className={styles.catsFact}>
            <h3>cats Fact</h3>
            <p>{text}</p>
        </div>
    );
};

export default CatsFact;
