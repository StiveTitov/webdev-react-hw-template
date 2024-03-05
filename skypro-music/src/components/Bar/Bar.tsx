import classNames from 'classnames'
import styles from './Bar.module.css'
import { SVG } from '../SVG';
import { Input } from '../Input';
export default function Bar() {
  return (

    <div className={styles.bar__content}>
      <div className={styles.barPlayerProgress} />
      <div className={styles.barPlayerBlock}>
        <div className={styles.bar__player}>
          <div className={styles.player__controls}>
            <div className={styles.playerBtnPrev}>
              <SVG className={styles.playerBtnPrevSvg} icon="icon-prev" />

            </div>
            <div className={classNames(styles.playerBtnPlay, styles._btn)}>
              <SVG className={styles.playerBtnPlaySvg} icon="icon-play" />

            </div>
            <div className={styles.playerBtnNext}>
              <SVG className={styles.playerBtnNextSvg} icon="icon-next" />

            </div>
            <div className={classNames(styles.playerBtnRepeat, styles._btnIcon)}>
              <SVG className={styles.playerBtnRepeatSvg} icon="icon-repeat" />

            </div>
            <div className={classNames(styles.playerBtnShuffle, styles._btnIcon)}>
              <SVG className={styles.playerBtnShuffleSvg} icon="icon-shuffle" />

            </div>
          </div>
          <div className={styles.playerTrackPlay}>
            <div className={styles.trackPlayContain}>
              <div className={styles.trackPlayImage}>
                <SVG className={styles.trackPlaySvg} icon="icon-note" />

              </div>
              <div className={styles.trackPlayAuthor}>
                <a className={styles.trackPlayAuthorLink} href="http://">
                  Ты та...
                </a>
              </div>
              <div className={styles.trackPlayAlbum}>
                <a className={styles.trackPlayAlbumLink} href="http://">
                  Баста
                </a>
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
              <Input
                className={styles.volumeProgressLine}
                type="range"
                name="range"
              />

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}