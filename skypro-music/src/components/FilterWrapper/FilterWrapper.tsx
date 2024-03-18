
"use client"
import styles from './FilterWrapper.module.css'
import { Filter } from "../Filter";
import { authors, genres, years } from './data';
import { useState } from 'react';

export default function FilterWrapper() {
    const [activeFilter, setActiveFilter] = useState<null | string>(null);
    function handleFiltreClick(filterName: string) {
        setActiveFilter(prev => prev === filterName ? null : filterName);
    }
    return (
        <>
            <div className={styles.centerblock__filter}>
                <div className={styles.filter__title}>Искать по:</div>
                <Filter top={290} left={23} title="исполнителю" list={authors} isOpen={activeFilter === "author"} onClick={() => handleFiltreClick("author")} />
                <Filter top={290} left={31} title="году выпуска" list={years} isOpen={activeFilter === "year"} onClick={() => handleFiltreClick("year")} />
                <Filter top={290} left={39} title="жанру" list={genres} isOpen={activeFilter === "genre"} onClick={() => handleFiltreClick("genre")} />

            </div>
        </>
    );
}