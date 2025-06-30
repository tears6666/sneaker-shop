import { useEffect } from 'react'
import { useCatalogStore } from '../../store/store'
import styles from './Catalog.module.scss'

export default function Catalog(){
  const fetch = useCatalogStore(state => state.fetchProds)
  const products = useCatalogStore(state => state.products)
	useEffect(() => {
		try {
			fetch()
		} catch (error) {
			console.log('Fatal error', error)
		}
	}, [fetch])

	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__subtitle}>Catalog</h2>
			<div className={styles.catalog__main}>
				{products.map(product => (
					<div key={product.id} className={styles.main__prod}>
						<img
							src={product.img}
							alt='product-img'
							width={product.width}
							height={product.height}
						/>
						<h3 className={styles.prod__title}>{product.title}</h3>
						<p className={styles.prod__cost}>{product.cost}</p>
						<button className={styles.prod__btn}>Add to cart</button>
					</div>
				))}
			</div>
		</div>
	)
}