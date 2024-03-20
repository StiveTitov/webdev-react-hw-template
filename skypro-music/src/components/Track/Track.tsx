"use client"
import { useAppDispatch } from "@/hooks/hooks";
import { SVG } from "../SVG";
import styles from "./Track.module.css"
import { TracksType } from "@/app/api/TrackApi";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type TrackType = {
    track: TracksType,
    tracks: TracksType[],

}
export default function Track({ track, tracks }: TrackType) {
    const { name, author, album, duration_in_seconds } = track;

    const dispatch = useAppDispatch();
    return (
        <>
            <div onClick={() => dispatch(setCurrentTrack({ currentTrack: track, tracks }))} className={styles.playlist__item}>
                <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                        <div className={styles.track__titleImage}>
                            <SVG className={styles.track__titleSvg} icon="icon-note" />
                        </div>
                        <div className={styles.track__title}>
                            <div className={styles.track__titleLink}>
                                {name} <span className={styles.track__titleSpan}>{ }</span>
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
                        <span className={styles.track__timeText}>{duration_in_seconds}</span>
                    </div>
                </div>
            </div>
        </>
    );
}