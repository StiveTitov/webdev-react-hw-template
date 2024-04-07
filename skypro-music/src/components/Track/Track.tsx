"use client"
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { SVG } from "../SVG";
import styles from "./Track.module.css"
import { TracksType } from "@/app/api/TrackApi";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type TrackType = {
    track: TracksType,
    

}
export default function Track({ track }: TrackType) {
    const { name, author, album, duration_in_seconds } = track;
    const isPlaying = useAppSelector((store) => store.playlist.isPlaying)
    const currentTrack = useAppSelector((store) => store.playlist.currentTrack)
    const tracks = useAppSelector((store) => store.playlist.tracks);
    const dispatch = useAppDispatch();

    // // Определение функции для форматирования длительности аудио
    function formatDuration(duration_in_seconds: any) {
        const minutes = Math.floor(duration_in_seconds / 60);
        const seconds = Math.floor(duration_in_seconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    return (
        <>

            <div onClick={() => dispatch(setCurrentTrack({ currentTrack: track, tracks }))} className={styles.playlist__item}>
                <div className={styles.playlist__track}>
                    <div className={styles.track__title}>
                        <div className={styles.track__titleImage}>
                            {/* Чтобы пометить выбранный трек розовой точкой */}
                            {currentTrack?.id === track.id && 
                            // И если трек воспроизводится (isPlaying- true)- включить анимацию точки
                            (isPlaying ?
                                (<span className={styles.pointPulse} ></span>)
                                : (<span className={styles.point} ></span>))}
                            {/* на против треков, которые не выбраны, выводится просто иконка ноты */}
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
                        <span className={styles.track__timeText}>{formatDuration(duration_in_seconds)}</span>
                    </div>
                </div>
            </div >
        </>
    );
}