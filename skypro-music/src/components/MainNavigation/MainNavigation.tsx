
import Menu from '../Menu/Menu';
import styles from './MainNavigation.module.css';
import Image from 'next/image';



export default function MainNavigation() {
    return (
        <>
            <nav className={styles.mainNav}>
                <div className={styles.nav__logo}>
                    <Image
                        className={styles.logo__image}
                        src="/img/logo.png"
                        alt="logo"
                        width={113.33}
                        height={17}
                    />
                </div>
                <Menu/>
            </nav>

        </>
    );
}