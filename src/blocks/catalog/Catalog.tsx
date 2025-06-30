import { useEffect } from 'react'
import { useCatalogStore } from '../../store/store'
import styles from './Catalog.module.scss'



export default function Catalog(){
  const fetch = useCatalogStore(state => state.fetchProds)
  

  useEffect(() => {
  try {
    fetch()
  } catch (error) {
    console.log('Fatal error', error)
  }
  }, [fetch])
  
  return(
    <div className={styles.catalog}>
      <h2 className={styles.catalog__subtitle}>Catalog</h2>
    </div>
  )
}