"use client"
import classNames from 'classnames'

import styles from './Bar.module.css'

import { SVG } from '../SVG';
import { ProgressBar, VolumeBar } from '../Input';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Skileton } from '../Skileton';
import { TracksType } from '@/app/api/TrackApi';

import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { nextTrack, prevTrack, togglePlaying, toggleShuffled } from '@/store/features/playlistSlice';
import { store } from '@/store/store';






export default function Bar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((store) => store.playlist.currentTrack);
  const isPlaying = useAppSelector((store) => store.playlist.isPlaying);

  const isShuffled = useAppSelector((store) => store.playlist.isShuffled)
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);



  // Определение обработчика событий для обновления времени и длительности аудио
  const handleTimeUpdate = () => {

    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
      // если текищее время трека равно продолжительности трека (трек проигрался до конца)
      if (audioRef.current.currentTime === audioRef.current.duration && !isLoop) {
        // то включить следующий трек
        console.log("next_track");
        dispatch(nextTrack())
      }

    }
  };

  const memoizedCallback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  // Определение обработчика событий для поиска определенного времени в аудиозаписи
  const handleSeek = (e: any) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  // Определение обработчика событий для громкости аудио

  const handleVolume = (e: any) => {
    setVolume(e.target.value)

  };

  // Определение обработчика событий для работы кнопки PLAY-PAUSE
  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch(togglePlaying());
    }

  };

  // Определение обработчика событий для работы кнопки PLAY-PAUSE
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch(togglePlaying());
    }

  };

  const handleLoopStart = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      setIsLoop(true);
    }
  }

  const handleLoopStop = () => {
    if (audioRef.current) {
      audioRef.current.loop = false;
      setIsLoop(false);
    }
  }



  // Обработка полосы прокрутки трека
  useEffect(() => {

    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  //


  // Обработка полосы громкости трека
  // useEffect(() => {

  //   if (audioRef.current) {
  //     audioRef.current.volume = volume / 100;
  //   }
  // }, [volume, audioRef]);

  // Обработка полосы громкости трека с помощью useCallback
  useEffect(() => {

    memoizedCallback();
    
  }, [memoizedCallback]);




  // Условие работы кнопки PLAY-PAUSE

  const togglePlay = isPlaying ? handleStop : handleStart;

  // Условие работы кнопки LOOP и Shuffle
  const toggleLoop = isLoop ? handleLoopStop : handleLoopStart;



  return (
    <div className={styles.bar__content}>
      {/* <audio> Добавляет, воспроизводит и управляет настройками аудиозаписи на веб-странице */}
      <audio autoPlay controls src={currentTrack?.track_file} ref={audioRef} hidden />

      <ProgressBar duration={duration} currentTime={currentTime} handleSeek={handleSeek} />

      <div className={styles.barPlayerBlock}>
        <div className={styles.bar__player}>
          <div className={styles.player__controls}>
            <div onClick={() => dispatch(prevTrack())} className={styles.playerBtnPrev}>
              <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />

            </div>
            <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
              {!isPlaying ?
                (<SVG className={styles.playerBtnPlaySvg} icon="icon-play" />)
                : (<SVG className={styles.playerBtnPlaySvg} icon="icon-pause" />)}

            </div>
            <div onClick={() => dispatch(nextTrack())} className={styles.playerBtnNext}>
              <SVG className={styles.playerBtnNextSvg} icon="icon-next" />

            </div>
            <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
              {isLoop ?
                (<SVG className={styles.playerBtnRepeatSvgActive} icon="icon-repeat" />)
                : (<SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />)}


            </div>
            <div onClick={() => dispatch(toggleShuffled())} className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
              {isShuffled ?
                (<SVG className={styles.playerBtnShuffleSvgActive} icon="icon-shuffle" />)
                : (<SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />)}

            </div>
          </div>

          <div className={styles.playerTrackPlay}>
            <div className={styles.trackPlayContain}>
              <div className={styles.trackPlayImage}>
                <SVG className={styles.trackPlaySvg} icon="icon-note" />

              </div>
              <div className={styles.trackPlayAuthor}>
                <div className={styles.trackPlayAuthorLink} >
                  {currentTrack?.name}
                </div>
              </div>
              <div className={styles.trackPlayAlbum}>
                <div className={styles.trackPlayAlbumLink} >
                  {currentTrack?.author}
                </div>
              </div>
            </div>

            <div className={styles.trackPlayLikeDis}>
              <div className={classNames(styles.trackPlayLike, styles._btnIcon)}>
                <SVG className={styles.trackPlayLikeSvg} icon="icon-like" />

              </div>
              <div className={classNames(styles.trackPlayDislike, styles._btnIcon)}>
                <SVG className={styles.trackPlayDislikeSvg} icon="icon-dislike" />

              </div>
            </div>
          </div>


        </div>
        <div className={styles.barVolumeBlock}>
          <div className={styles.volumeContent}>
            <div className={styles.volumeImage}>
              <SVG className={styles.volumeSvg} icon="icon-volume" />

            </div>
            <div className={styles.volumeProgress}>

              <VolumeBar volume={volume} handleVolume={handleVolume} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
