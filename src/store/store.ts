import { create } from 'zustand';

interface Product {
    id: number,
    title: string,
    cost: string
}

interface ProductsState{
    products: Product[],
    isLoading: boolean,
    errors: string[]
    fetchProducts: () => void,
}

export const useCatalogStore = create<ProductsState>()((set) => ({
    products: [],
    isLoading: false,
    errors: [],
    fetchProducts: async () => {
        const response = await fetch('http://localhost:3000/products')
        const json = await response.json() as Product[];
        set({products: json})
    }
}))