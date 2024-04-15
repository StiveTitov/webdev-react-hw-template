"use client"
import Link from 'next/link';
import styles from './SideBar.module.css'
import Image from 'next/image';
import { SVG } from '../SVG';
import { useEffect, useState } from 'react';
import { Skileton } from '../Skileton';
import { getCategoryList } from '@/app/api/TrackApi';



export default function SideBar() {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);

    
  
    
    return (
        <div className={styles.main__sidebar}>
            <div className={styles.sidebar__personal}>
                <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
                <div className={styles.sidebar__icon}>
                    <Link href="/signin">
                        <SVG icon="logout" />

                    </Link>
                </div>
            </div>
            <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                    <div className={styles.sidebar__item}>
                        <Link className={styles.sidebar__link} href="tracks/category/1">
                            {isLoading ? (
                                <Skileton className={styles.skileton__sidebar} />
                            ) : (
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist01.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            )}

                        </Link>
                    </div>
                    <div className={styles.sidebar__item}>
                        <Link className={styles.sidebar__link} href="tracks/category/2">
                            {isLoading ? (
                                <Skileton className={styles.skileton__sidebar} />
                            ) : (
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist02.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            )}
                        </Link>
                    </div>
                    <div className={styles.sidebar__item}>
                        <Link className={styles.sidebar__link} href="tracks/category/3">
                            {isLoading ? (
                                <Skileton className={styles.skileton__sidebar} />
                            ) : (
                                <Image
                                    className={styles.sidebar__img}
                                    src="/img/playlist03.png"
                                    alt="day's playlist"
                                    width={250}
                                    height={170}
                                />
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}