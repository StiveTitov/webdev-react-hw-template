"use client"
import { CenterBlock } from '@/components/CenterBlock';
import { CenterBlockHeader } from '@/components/CenterBlockHeader';
import { Content } from '@/components/Content';
import { FilterWrapper } from '@/components/FilterWrapper/FilterWrapper';
import { MainNavigation } from '@/components/MainNavigation';
import { Search } from '@/components/Search';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { SideBar } from '@components/SideBar';
import { useEffect, useState } from 'react';
import { getAllTracks } from '../api/TrackApi';
import { setTracks } from '@/store/features/playlistSlice';
import { Authorization, getToken } from '../api/AuthApi';
import { setAuthState, setToken, setUserData } from '@/store/features/authSlice';

export default function MainTracksPage() {
  const AuthState = useAppSelector((store) => store.auth.isAuthState);
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((store) => store.playlist.tracks);
  //При загрузки страницы проверяем есть ли регистрационые данные в localStorage
  const loginData = JSON.parse(localStorage.getItem('user') || '{}');

  //и помещаем регистрационные данные и токины в REDAX (store)
  function setLoginData() {
    if (loginData) {
      dispatch(setUserData(loginData));
      dispatch(setToken(JSON.parse(localStorage.getItem('tokenRefresh') || '{}')));
    }
  }

  setLoginData();


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