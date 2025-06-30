import { FaBasketShopping } from "react-icons/fa6";
import styles from './Header.module.scss';

export default function Header() {
  return(
    <header className={styles.header}>
      <h1 className={styles.header__logo}>SneakerHub</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.nav__list}>
          <li id={styles.first} className={styles.list__item}>Catalog</li>
          <li className={styles.list__item}>About Us</li>
          <li className={styles.list__item}>Contacts</li>
          <li className={styles.list__item}>Policy</li>
          <FaBasketShopping className={styles.header__basket}/>
        </ul>
      </nav>
    </header>
  )
}