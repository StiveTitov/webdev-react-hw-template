'use client'
import { useMemo } from 'react';
import { Track } from '../Track';
import styles from './Playlist.module.css'
import { Skileton } from '../Skileton';
import { TracksType, getAllTracks } from '@/app/api/TrackApi';
import { useAppSelector } from '@/hooks/hooks';

type PlaylistType = {

    tracks: TracksType[],

}
export default function Playlist({ isFavorite }) {

    const tracks = useAppSelector((store) => store.playlist.tracks);
    const filtredTracks = useAppSelector((store) => store.playlist.filtredTracks);


    const memoizedTracks = useMemo(() => {
        if (filtredTracks.length !== 0) {
            return filtredTracks;
        } else {
            return tracks;
        }
    }, [filtredTracks, tracks]);



    return (
        <>
            <div className={styles.content__playlist}>



                {memoizedTracks?.map((track) => (
                    <Track isFavorite={isFavorite} key={track.id} track={track}

                    />
                ))}


            </div>
        </>
    );
}