import Link from 'next/link';
import styles from './MainNavigation.module.css';
import Image from 'next/image';


export function MainNavigation() {
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
                <div className={styles.nav__burger}>
                    <span className={styles.burger__line} />
                    <span className={styles.burger__line} />
                    <span className={styles.burger__line} />
                </div>
                <div className={styles.nav__menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link href="/" className={styles.menu__link}>
                                Главное
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href="/" className={styles.menu__link}>
                                Мой плейлист
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href="/signin" className={styles.menu__link}>
                                Войти
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}