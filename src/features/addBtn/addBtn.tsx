import { useState } from 'react'
import '../../styles/AddToCart.scss'

export const AddBtn = () => {
    const [isInCart, setIsInCart] = useState(false)

    const handleClick = () =>{
        setIsInCart(!isInCart)
    }

    return(
        <button 
        className='add-btn'
        onClick={handleClick}
        >
            <p className='btn__text'>{isInCart ? 'In cart' : 'Add to cart'}</p>
        </button>
    )
} 