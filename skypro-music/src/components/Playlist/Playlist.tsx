"use client";
import { useEffect, useState } from 'react';
import { Track } from '../Track';
import styles from './Playlist.module.css'
import { Skileton } from '../Skileton';
export default function Playlist() {
    const [isLoading, setIsLoaring] = useState<Boolean>(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaring(false);
        }, 3000)
        return () => {
            clearTimeout(timeout);
        }
    }, [])
    return (
        <>
            <div className={styles.content__playlist}>
                {isLoading ? (
                    [1, 2, 3, 4, 5].map(item => <div key={item}><Skileton className={styles.skileton__playlist}/></div>)
                ) : (               
                <Track trackTitle="Guilt" titleLink="http://" author="Nero" authorLink="http://" album="Welcome Reality" albumLink="http://" timeText="4:44" />
                )}
                {/* <Track trackTitle="Elektro" titleLink="http://" author="Dynoro, Outwork, Mr. Gee" authorLink="http://" album="Elektro" albumLink="http://" timeText="2:22" />
                <Track trackTitle="I’m Fire" titleLink="http://" author="Ali Bakgor" authorLink="http://" album="I’m Fire" albumLink="http://" timeText="2:22" />
                <Track trackTitle="Non Stop" trackTitleSpan="(Remix)" titleLink="http://" author="Стоункат, Psychopath" authorLink="http://" album="Non Stop" albumLink="http://" timeText="4:12" />
                <Track trackTitle="Run Run" trackTitleSpan="(feat. AR/CO)" titleLink="http://" author="Jaded, Will Clarke, AR/CO" authorLink="http://" album="Run Run" albumLink="http://" timeText="2:54" />
                <Track trackTitle="Eyes on Fire" trackTitleSpan="(Zeds Dead Remix)" titleLink="http://" author="Blue Foundation, Zeds Dead" authorLink="http://" album="Eyes on Fire" albumLink="http://" timeText="5:20" />
                <Track trackTitle="Mucho Bien" trackTitleSpan="(Hi Profile Remix)" titleLink="http://" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" authorLink="http://" album="Mucho Bien" albumLink="http://" timeText="3:41" />
                <Track trackTitle="Knives n Cherries" titleLink="http://" author="minthaze" authorLink="http://" album="Captivating" albumLink="http://" timeText="1:48" />
                <Track trackTitle="How Deep Is Your Love" titleLink="http://" author="Calvin Harris, Disciples" authorLink="http://" album="How Deep Is Your Love" albumLink="http://" timeText="3:32" />
                <Track trackTitle="Morena" titleLink="http://" author="Tom Boxer" authorLink="http://" album="Soundz Made in Romania" albumLink="http://" timeText="3:36" />
                <Track titleLink="http://" authorLink="http://" albumLink="http://" /> */}
                
            </div>
        </>
    );
}