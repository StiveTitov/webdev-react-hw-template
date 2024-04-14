"use client";

import styles from "./FilterWrapper.module.css";

import { useState } from "react";


import { setFilteredTracks } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { TracksType } from "@/app/api/TrackApi";
import { FilterButton } from "../FilterButton";


type TrackKeys = Pick<Track, "author" | "genre" | "release_date">;
export type Track = {
  album: string;
  author: string;
  duration_in_seconds: number;
  genre: string;
  id: number;
  logo: null;
  name: string;
  release_date: string;
  stared_user: StaredUser;
  track_file: string;
};

type StaredUser = {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
};

function getListItem(item: keyof TrackKeys, trackList: TracksType[]|[]) {
  const listItem: string[] = [];
  trackList?.forEach((track) => {
    if (listItem.includes(track[item]) || track[item] === "-") return;
    listItem.push(track[item]);
  });
  return listItem.sort();
}

const sortedByDate: string[] = [
  "По умолчанию",
  "Сначала новые",
  "Сначала старые",
];

export function FilterWrapper() {
  const [isActive, setIsActive] = useState<string | null>();

  function handelActive(title: string) {
    setIsActive((prev) => (prev === title ? null : title));
  }

  const tracks = useAppSelector((store) => store.playlist.tracks);
  const selectedAuthors = useAppSelector(
    (store) => store.playlist.filterOptions.authors
  );
  const selectedGenres = useAppSelector(
    (store) => store.playlist.filterOptions.genres
  );
  const selectedYears = useAppSelector(
    (store) => store.playlist.filterOptions.years
  );
  const dispatch = useAppDispatch();

  const authorsList = getListItem("author", tracks);
  const genreList =  getListItem("genre", tracks);

 

  function toggleSelectedAuthors(item: string) {
    dispatch(
      setFilteredTracks({
        authors: selectedAuthors.includes(item)
          ? selectedAuthors.filter((author) => author !== item)
          : [...selectedAuthors, item],
      })
    );
    
  }

  function toggleSelectedGenre(item: string) {
    dispatch(
      setFilteredTracks({
        genre: selectedGenres.includes(item)
          ? selectedGenres.filter((genre) => genre !== item)
          : [...selectedGenres, item],
      })
    );
    
  }

  function toggleSelectedYears(item: string) {
    dispatch(
      setFilteredTracks({
        years: selectedYears.includes(item)
          ? selectedYears.filter((year) => year !== item)
          : [...selectedYears, item],
      })
    );
    
  }


  return (
    <div className={styles.centerBlockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        isOpen={isActive === "исполнителю" ? true : false}
        list={authorsList}
        selected={selectedAuthors}
        counter={selectedAuthors.length}
        title="исполнителю"
        toggleSelected={toggleSelectedAuthors}
        onClick={() => handelActive("исполнителю")}
      />
      <FilterButton
        isOpen={isActive === "году выпуска" ? true : false}
        list={sortedByDate}
        title="году выпуска"
        selected={selectedYears}
        counter={0}
        toggleSelected={toggleSelectedYears}
        onClick={() => handelActive("году выпуска")}
      />
      <FilterButton
        isOpen={isActive === "жанру" ? true : false}
        list={genreList}
        title="жанру"
        selected={selectedGenres}
        counter={selectedGenres.length}
        toggleSelected={toggleSelectedGenre}
        onClick={() => handelActive("жанру")}
      />
    </div>
  );
}
