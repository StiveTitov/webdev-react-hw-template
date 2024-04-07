'use client'
import { useState } from 'react';

import { SVG } from '../SVG';
import styles from './Search.module.css'
import { useAppDispatch } from '@/hooks/hooks';
import { setFilteredTracks } from '@/store/features/playlistSlice';
export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const disputch = useAppDispatch();
    return (
        <>
            <div className={styles.centerblock__search}>
                <SVG className={styles.search__svg} icon="icon-search" />
                <input className={styles.search__text}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        disputch(setFilteredTracks({ searchValue: e.target.value }))
                    }}
                />
            </div>
        </>
    );
}