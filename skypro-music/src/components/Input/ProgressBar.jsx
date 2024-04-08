'use client'

import  styles from "./ProgressBar.module.css";



export default function ProgressBar({duration, currentTime, handleSeek}) {
  

  return (
    <input className={styles.barPlayerProgress}
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      
      onChange={handleSeek}
      
    />
  );
}