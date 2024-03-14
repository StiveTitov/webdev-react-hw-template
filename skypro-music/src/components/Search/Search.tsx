import { Input } from '../Input';
import { SVG } from '../SVG';
import styles from './Search.module.css'
export default function Search() {
    return (
        <>
        <div className={styles.centerblock__search}>
                <SVG className={styles.search__svg} icon="icon-search" />
                <Input className={styles.search__text}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </div>
        </>
    );
}