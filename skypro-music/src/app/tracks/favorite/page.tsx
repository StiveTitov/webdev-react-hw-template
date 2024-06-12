"use client"
import { refreshToken } from "@/app/api/AuthApi"
import { getCategoryTracks, getFavoriteTracks } from "@/app/api/TrackApi"
import { CenterBlock } from "@/components/CenterBlock"
import { CenterBlockHeader } from "@/components/CenterBlockHeader"
import { Content } from "@/components/Content"
import { FilterWrapper } from "@/components/FilterWrapper/FilterWrapper"
import { MainNavigation } from "@/components/MainNavigation"
import { Search } from "@/components/Search"

import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { setToken } from "@/store/features/authSlice"

import { setTracks } from "@/store/features/playlistSlice"
import { useEffect, useState } from "react"

type CategoryType = {
    params: {
        id: string,
    }
}



export default function Favorite() {








    const dispatch = useAppDispatch();
    const tracks = useAppSelector((store) => store.playlist.tracks);

    const tokenInfo = useAppSelector((store) => store.auth.token);

    function requestWithRefresh(request) {
        refreshToken(tokenInfo?.refresh).then((token) => {
          dispatch(setToken({ ...tokenInfo, access: token.access }));
          localStorage.setItem(
            "tokenRefresh",
            JSON.stringify({ ...tokenInfo, access: token.access })
          );
          return request(token.access);
        });
      }

    useEffect(() => {
        function handleTracks() {
            getFavoriteTracks(tokenInfo?.access).then(response => {
                // Долбаные разработчики засунули список треков в долбанный объект items, приходится  извлекать
                dispatch(setTracks(response));



            }).catch(() => {
                requestWithRefresh(handleTracks)
            })
        }
        handleTracks()

    }, [dispatch])

    return (
        <>
            <MainNavigation />
            <CenterBlock >
                <Search />
                <CenterBlockHeader text="Мой плейлист" />
                <FilterWrapper />
                <Content isFavorite />
            </CenterBlock>

        </>
    )
}