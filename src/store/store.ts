import { create } from 'zustand';


interface IProduct {
	id: number
	title: string
	cost: string
}

interface IProductState {
	products: IProduct[]
	isLoading: boolean
	errors: string[]
	fetchProds: () => void
}

export const useCatalogStore = create<IProductState>()(set => ({
	products: [],
	isLoading: true,
	errors: [],
	fetchProds: async () => {
		const response = await fetch('http://localhost:3000/products')
		const data = (await response.json()) as IProduct[]
		set({ products: data })
	},
}))