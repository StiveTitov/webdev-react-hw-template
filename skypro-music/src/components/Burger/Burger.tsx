
import styles from './Burger.module.css'
type PropType = {
    onClick: () => void
}
export default function Burger({ onClick }: PropType) {
    return (
        <>
            <button className={styles.nav__burger} onClick={onClick}>
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
                <span className={styles.burger__line} />
            </button>
        </>
    );
}