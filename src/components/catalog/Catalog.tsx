import '../../styles/Catalog.scss'
import { useCatalogStore } from '../../store/store'
import { useEffect } from 'react';


export default function Catalog(){

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
                    <div className='product__item' key={product.id}>
                        <div className='item__media'>
                            <h2 className='item__subtitle'>{product.title}.</h2>
                            <p className='item__cost'>{product.cost}</p>
                        </div>
                        <button className='item__add'>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}