import { useEffect, useState } from 'react';
import { Track } from '../Track';
import styles from './Playlist.module.css'
import { Skileton } from '../Skileton';
import { TracksType } from '@/app/api/TrackApi';

type PlaylistType = {

    tracks: TracksType[],

}
export default function Playlist({ tracks }: PlaylistType) {


    return (
        <>
            <div className={styles.content__playlist}>

                {tracks.map((track) => (
                    <Track key={track.id} track={track} tracks={tracks} />
                ))}


            </div>
        </>
    );
}