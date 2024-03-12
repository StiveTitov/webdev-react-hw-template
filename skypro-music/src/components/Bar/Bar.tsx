"use client"
import classNames from 'classnames'

import styles from './Bar.module.css'

import { SVG } from '../SVG';
import { Input, VolumeBar } from '../Input';
import { useEffect, useRef, useState } from 'react';
import { Skileton } from '../Skileton';
import { intTrack } from '@/app/api/TrackApi';
import { ProgressBar } from '../Input';


type BarType = {
  currentTrack: intTrack,
  isLoading: boolean,
}


export default function Bar({ currentTrack, isLoading }: BarType) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);



  // Определение обработчика событий для обновления времени и длительности аудио
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };


  // Определение обработчика событий для поиска определенного времени в аудиозаписи
  const handleSeek = (e) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    }
  };

  // Определение обработчика событий для громкости аудио

  const handleVolume = (e) => {
    setVolume(e.target.value)

  };

  // Определение обработчика событий для работы кнопки PLAY-PAUSE
  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }

  };

  // Определение обработчика событий для работы кнопки PLAY-PAUSE
  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
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

  // // Определение функции для форматирования длительности аудио
  // function formatDuration(durationSeconds) {
  //   const minutes = Math.floor(durationSeconds / 60);
  //   const seconds = Math.floor(durationSeconds % 60);
  //   const formattedSeconds = seconds.toString().padStart(2, "0");
  //   return `${minutes}:${formattedSeconds}`;
  // }


  // Обработка полосы прокрутки трека
  useEffect(() => {

    audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  //


  // Обработка полосы громкости трека
  useEffect(() => {

    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);
  //


function ClickOnIcon () {
alert("Еще не реализовано")
}
  // Условие работы кнопки PLAY-PAUSE
  const togglePlay = isPlaying ? handleStop : handleStart;
  const toggleLoop = isLoop ? handleLoopStop : handleLoopStart;

  return (
    <div className={styles.bar__content}>
      <audio autoPlay controls src={currentTrack.track_file} ref={audioRef} hidden />



      <ProgressBar duration={duration} currentTime={currentTime} handleSeek={handleSeek} />

      <div className={styles.barPlayerBlock}>
        <div className={styles.bar__player}>
          <div className={styles.player__controls}>
            <div onClick={ClickOnIcon} className={styles.playerBtnPrev}>
              <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />

            </div>
            <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles._btn)}>
              {!isPlaying ? (
                <SVG className={styles.playerBtnPlaySvg} icon="icon-play" />
              ) : (
                <SVG className={styles.playerBtnPlaySvg} icon="icon-pause" />
              )}


            </div>
            <div onClick={ClickOnIcon} className={styles.playerBtnNext}>
              <SVG className={styles.playerBtnNextSvg} icon="icon-next" />

            </div>
            <div onClick={toggleLoop} className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
              {!isLoop ? (
                <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />
              ) : (
                <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeaton" />
              )}


            </div>
            <div onClick={ClickOnIcon} className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
              <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />

            </div>
          </div>
          {isLoading ? (
            <Skileton className={styles.skileton__TrackPlay} />
          ) : (
            <div className={styles.playerTrackPlay}>
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <SVG className={styles.trackPlaySvg} icon="icon-note" />

                </div>
                <div className={styles.trackPlayAuthor}>
                  <div className={styles.trackPlayAuthorLink} >
                    {currentTrack.name}
                  </div>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <div className={styles.trackPlayAlbumLink} >
                    {currentTrack.author}
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
          )}

        </div>
        <div className={styles.barVolumeBlock}>
          <div className={styles.volumeContent}>
            <div className={styles.volumeImage}>
              <SVG className={styles.volumeSvg} icon="icon-volume" />

            </div>
            <div className={styles.volumeProgress}>
              
              <VolumeBar volume={volume} handleVolume={handleVolume}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
