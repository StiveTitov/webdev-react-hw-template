import styles from './SideBar.module.css'
import Image from 'next/image';

export function SideBar() {
    return (
        <div className={styles.main__sidebar}>
            <div className={styles.sidebar__personal}>
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className={styles.sidebar__icon}>
                    <svg>
                        <use xlinkHref="img/icon/sprite.svg#logout" />
                    </svg>
                </div>
            </div>
            <div className={styles.sidebar__block}>
                <div className={styles.sidebar__list}>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="#">
                            <Image
                                className={styles.sidebar__img}
                                src="/img/playlist01.png"
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </a>
                    </div>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="#">
                            <Image
                                className={styles.sidebar__img}
                                src="/img/playlist02.png"
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </a>
                    </div>
                    <div className={styles.sidebar__item}>
                        <a className={styles.sidebar__link} href="#">
                            <Image
                                className={styles.sidebar__img}
                                src="/img/playlist03.png"
                                alt="day's playlist"
                                width={250}
                                height={170}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}