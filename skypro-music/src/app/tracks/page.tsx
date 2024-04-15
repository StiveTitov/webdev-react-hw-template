"use client"
import { CenterBlock } from '@/components/CenterBlock';
import { CenterBlockHeader } from '@/components/CenterBlockHeader';
import { Content } from '@/components/Content';
import { FilterWrapper } from '@/components/FilterWrapper/FilterWrapper';
import { MainNavigation } from '@/components/MainNavigation';
import { Search } from '@/components/Search';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { SideBar } from '@components/SideBar';
import { useEffect } from 'react';
import { getAllTracks } from '../api/TrackApi';
import { setTracks } from '@/store/features/playlistSlice';

export default function MainTracksPage() {
  
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((store) => store.playlist.tracks);



  useEffect(() => {
      getAllTracks().then(response => {
          dispatch(setTracks(response));

      })
  }, [dispatch])


  return (
    <>
      <MainNavigation />
      <CenterBlock>
        <Search />
        <CenterBlockHeader text="Треки" />
        <FilterWrapper />
        <Content />
      </CenterBlock>
      <SideBar />
    </>

  );
}