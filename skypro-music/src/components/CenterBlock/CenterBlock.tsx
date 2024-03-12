import classNames from 'classnames';
import styles from './CenterBlock.module.css'
import { FilterWrapper } from '../FilterWrapper';

import { Search } from '../Search';
import { SVG } from '../SVG';

import { Playlist } from '../Playlist';
import { intTrack } from '@/app/api/TrackApi';

type CenterBlockType = {
    isLoading: boolean,
    tracks: intTrack[],
    setCurrentTrack: (track: intTrack) => void,
}

export default function CenterBlock({ isLoading, tracks, setCurrentTrack }: CenterBlockType) {

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
                <Playlist isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} />

            </div>
        </div>
    );
}