import { SVG } from "../SVG";
import styles from "./Track.module.css"

type TrackType = {
    trackTitle?: string;
    trackTitleSpan?: string;
    titleLink?: string;
    author?: string;
    authorLink?: string;
    album?: string;
    albumLink?: string;
    timeText?: string;

}
export default function Track({ trackTitle, trackTitleSpan, titleLink, author, authorLink, album, albumLink, timeText }: TrackType) {
    return (
        <>
            <div className={styles.playlist__item}>
                <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                        <div className={styles.track__titleImage}>
                            <SVG className={styles.track__titleSvg} icon="icon-note" />
                        </div>
                        <div className={styles.track__title}>
                            <a className={styles.track__titleLink} href={`${titleLink}`}>
                                {trackTitle} <span className={styles.track__titleSpan}>{trackTitleSpan}</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.track__author}>
                        <a className={styles.track__authorLink} href={`${authorLink}`}>
                            {author}
                        </a>
                    </div>
                    <div className={styles.track__album}>
                        <a className={styles.track__albumLink} href={`${albumLink}`}>
                            {album}
                        </a>
                    </div>
                    <div className={styles.track__time}>
                        <SVG className={styles.track__timeSvg} icon="icon-like" />
                        <span className={styles.track__timeText}>{timeText}</span>
                    </div>
                </div>
            </div>
        </>
    );
}