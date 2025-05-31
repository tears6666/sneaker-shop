import '../../styles/Header.scss'
import User from '../../img/user-fill.svg'
import Basket from '../../img/shopping-basket-fill.svg'
import { useState } from 'react'
export default function Header(){
    let [cartOpen, setCartOpen] = useState(false)
    return(
        <header className='header'>
            <h1 className='header__logo'>SneakerHub</h1>
            <div className='header__media'>
                <img className={`media__basket ${cartOpen && `active`}`} src={Basket} onClick={() => setCartOpen(cartOpen = !cartOpen)} alt="basket-logo" />
                <img className='media__user' src={User} alt="user-logo" />
            </div>
            {cartOpen && (
                <div className='open-cart'>
                    <h2 className='cart__subtitle'>Cart</h2>
                    <div className='cart__inner'>
                        <p className='inner__text'>Cart is empty.</p>
                    </div>
                </div>
            )}
        </header>
    )
}