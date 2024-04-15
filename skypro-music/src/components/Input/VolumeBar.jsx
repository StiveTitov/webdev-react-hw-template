"use client";

import styles from "./VolumeBar.module.css";

export default function VolumeBar({ volume, handleVolume }) {
  return (
    <input
      className={styles.barVolumeProgress}
      type="range"
      min={0}
      max={100}
      value={volume}
      onChange={handleVolume}
    />
  );
}
