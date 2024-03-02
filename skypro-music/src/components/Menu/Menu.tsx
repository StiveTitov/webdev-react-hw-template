"use client";
import Link from 'next/link';
import { Burger } from "../Burger";
import styles from './Menu.module.css'
import { useState } from 'react';

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <Burger onClick={() => setIsOpen(prev => !prev)} />
            {isOpen && (
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
            )}
        </>
    );
}