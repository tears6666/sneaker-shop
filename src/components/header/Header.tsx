import '../../styles/Header.scss'
import User from '../../img/user-fill.svg'
import Basket from '../../img/shopping-basket-fill.svg'
export default function Header(){
    return(
        <header className='header'>
            <h1 className='header__logo'>SneakerHub</h1>
            <div className='header__media'>
                <img className='media__basket' src={Basket} alt="basket-logo" />
                <img className='media__user' src={User} alt="user-logo" />
            </div>
        </header>
    )
}