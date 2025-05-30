import '../../styles/Catalog.scss'
import { useCatalogStore } from '../../store/store'
import { useEffect } from 'react';


export default function Catalog(){
    // constants
    const products = useCatalogStore(state => state.products);
    const fetchProducts = useCatalogStore(state => state.fetchProducts)


    useEffect(() => {
        try{
            fetchProducts()
        } catch(error){
            console.log('Fatal error:', error)
        }
    }, [fetchProducts])
    
    
    return(
        <div className='catalog'>
            <h2 className='catalog__subtitle'>Catalog</h2>
            <div className='catalog__product'>
                {products.map((product) =>(
                    <div key={product.id}>{product.img} {product.title}. {product.cost}</div>
                ))}
            </div>
        </div>
    )
}