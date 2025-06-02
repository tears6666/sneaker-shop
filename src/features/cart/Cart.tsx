import '../../styles/Cart.scss'

export const Cart = () =>{
    return(
        <div className='open-cart'>
            <h2 className='cart__subtitle'>Cart</h2>
            <div className='cart__inner'>
                <p className='inner__text'>Cart is empty.</p>
            </div>
        </div>
    )
}