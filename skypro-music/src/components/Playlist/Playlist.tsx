"use client";
import { useEffect, useState } from 'react';
import { Track } from '../Track';
import styles from './Playlist.module.css'
import { Skileton } from '../Skileton';
import { intTrack } from '@/app/api/TrackApi';

type PlaylistType = {
    isLoading: boolean,
    tracks: intTrack[],
    setCurrentTrack: (track: intTrack) => void,
}
export default function Playlist({ isLoading, tracks, setCurrentTrack }: PlaylistType) {


    return (
        <>
            <div className={styles.content__playlist}>
                {isLoading ? (
                    [1, 2, 3, 4, 5].map(item => <div key={item}><Skileton className={styles.skileton__playlist} /></div>)
                ) :
                    tracks.map((track) => (
                        <Track onClick={() => setCurrentTrack(track)} key={track.id} trackTitle={track.name} author={track.author} album={track.album} timeText={track.duration_in_seconds} />)
                    )}
                

            </div>
        </>
    );
}