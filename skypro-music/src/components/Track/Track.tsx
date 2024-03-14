import { SVG } from "../SVG";
import styles from "./Track.module.css"

type TrackType = {
    trackTitle?: string,
    trackTitleSpan?: string,
    titleLink?: string,
    author?: string,
    authorLink?: string,
    album?: string,
    albumLink?: string,
    timeText?: string,
    onClick: () => void,

}
export default function Track({ onClick, trackTitle, trackTitleSpan, author, album, timeText }: TrackType) {
    return (
        <>
            <div onClick={onClick} className={styles.playlist__item}>
                <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                        <div className={styles.track__titleImage}>
                            <SVG className={styles.track__titleSvg} icon="icon-note" />
                        </div>
                        <div className={styles.track__title}>
                            <div className={styles.track__titleLink}>
                                {trackTitle} <span className={styles.track__titleSpan}>{trackTitleSpan}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.track__author}>
                        <div className={styles.track__authorLink} >
                            {author}
                        </div>
                    </div>
                    <div className={styles.track__album}>
                        <div className={styles.track__albumLink} >
                            {album}
                        </div>
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