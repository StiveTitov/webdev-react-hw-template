'use client'

import styles from './CenterBlock.module.css'




import { getAllTracks } from '@/app/api/TrackApi';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useEffect } from 'react';
import { setTracks } from '@/store/features/playlistSlice';



type CenterBlockType = {children: React.ReactNode}

export default function CenterBlock({ children }:CenterBlockType) {

    

    return (
        <div className={styles.mainCenterblock}>
            {children}
        </div>
    );
}