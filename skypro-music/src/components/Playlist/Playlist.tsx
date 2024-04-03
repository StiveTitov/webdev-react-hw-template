'use client'
import { useEffect, useState } from 'react';
import { Track } from '../Track';
import styles from './Playlist.module.css'
import { Skileton } from '../Skileton';
import { TracksType, getAllTracks } from '@/app/api/TrackApi';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setTracks } from '@/store/features/playlistSlice';
import { store } from '@/store/store';

type PlaylistType = {

    tracks: TracksType[],

}
export default function Playlist() {
    
    const tracks = useAppSelector((store) => store.playlist.tracks);
    const filtredTracks = useAppSelector((store)=> store.playlist.filtredTracks);
console.log(filtredTracks);
    
    
    

    return (
        <>
            <div className={styles.content__playlist}>

                {filtredTracks.length !== 0 ? filtredTracks.map((track) => (
                    <Track key={track.id} track={track} />
                )) : tracks.map((track) => (
                    <Track key={track.id} track={track} />))}


            </div>
        </>
    );
}