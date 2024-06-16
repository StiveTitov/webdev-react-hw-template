"use client";
import Link from 'next/link';
import { Burger } from "../Burger";
import styles from './Menu.module.css'
import { useEffect, useState } from 'react';
import { AuthType } from '@/app/api/AuthApi';

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const loginData:AuthType = JSON.parse(localStorage.getItem('user') || '{}');
    useEffect(() => {
        if (!loginData.email) { setIsAuth(false) } else { setIsAuth(true) }
    }, [loginData])

    function toggleAuth() {
        if (isAuth) {
            localStorage.clear();
            setIsAuth(false)
        }
    }
    return (
        <>
            <Burger onClick={() => setIsOpen(prev => !prev)} />
            {isOpen && (
                <div className={styles.nav__menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <Link href="/tracks" className={styles.menu__link}>
                                Главное
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            <Link href="/tracks/favorite" className={styles.menu__link}>
                                Мой плейлист
                            </Link>
                        </li>
                        <li className={styles.menu__item}>
                            {isAuth ? (
                                <Link href="/tracks" className={styles.menu__link}
                                    onClick={() => toggleAuth()}
                                >
                                    Выйти
                                </Link>
                            ) : (
                                <Link href="/signin" className={styles.menu__link}
                                    onClick={() => toggleAuth()}
                                >
                                    Войти
                                </Link>)}

                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}