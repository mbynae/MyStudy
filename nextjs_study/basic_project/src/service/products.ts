import path from 'path';
import { promises as fs } from 'fs';

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export const getProducts = async (): Promise<Product[]> => {
    const filePath = path.join(process.cwd(), 'data', 'product.json');
    const data = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(data);
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
    const products = await getProducts();
    return products.find(item => item.id === id);
};
