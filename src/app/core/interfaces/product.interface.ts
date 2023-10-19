export interface ProductList {
    limit: number;
    products: Product[];
    skip: number;
    total: number
}

export interface Product {
    brand: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    rating: number;
    thumbnail: string;  
    category: string;
    price: number;
    stock: number;
    title: string;
    discountPrice?: number
}