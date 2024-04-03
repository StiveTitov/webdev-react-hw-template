'use client'
import classNames from 'classnames';
import styles from './CenterBlock.module.css'


import { Search } from '../Search';
import { SVG } from '../SVG';

import { Playlist } from '../Playlist';
import { getAllTracks, TracksType } from '@/app/api/TrackApi';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useEffect } from 'react';
import { setTracks } from '@/store/features/playlistSlice';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';



export default function CenterBlock() {

    const dispatch = useAppDispatch();
    const tracks = useAppSelector((store) => store.playlist.tracks);
    
    
    
    useEffect(() => {
      getAllTracks().then(response => {
        dispatch(setTracks(response));
        
      })
    }, [dispatch])

    return (
        <div className={styles.mainCenterblock}>
            <Search />
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <FilterWrapper />
            <div className={styles.centerblock__content}>
                <div className={styles.content__title}>
                    <div className={classNames(styles.playlistTitle__col, styles.col01)}>Трек</div>
                    <div className={classNames(styles.playlistTitle__col, styles.col02)}>Исполнитель</div>
                    <div className={classNames(styles.playlistTitle__col, styles.col03)}>Альбом</div>
                    <div className={classNames(styles.playlistTitle__col, styles.col04)}>
                        <SVG className={styles.playlistTitle__svg} icon='icon-watch' />
                    </div>
                </div>
                <Playlist />

            </div>
        </div>
    );
}