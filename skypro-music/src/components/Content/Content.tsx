import { Playlist } from "../Playlist";
import { SVG } from "../SVG";
import styles from "./Content.module.css"
import classNames from "classnames";

export default function Content({ isFavorite }) {
    return (
        <div className={styles.centerblock__content}>
            <div className={styles.content__title}>
                <div className={classNames(styles.playlistTitle__col, styles.col01)}>Трек</div>
                <div className={classNames(styles.playlistTitle__col, styles.col02)}>Исполнитель</div>
                <div className={classNames(styles.playlistTitle__col, styles.col03)}>Альбом</div>
                <div className={classNames(styles.playlistTitle__col, styles.col04)}>
                    <SVG className={styles.playlistTitle__svg} icon='icon-watch' />
                </div>
            </div>
            <Playlist isFavorite={isFavorite} />

        </div>
    );
}