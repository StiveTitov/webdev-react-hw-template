"use client"
import { getCategoryTracks, getFavoriteTracks } from "@/app/api/TrackApi"
import { CenterBlock } from "@/components/CenterBlock"
import { CenterBlockHeader } from "@/components/CenterBlockHeader"
import { Content } from "@/components/Content"
import { FilterWrapper } from "@/components/FilterWrapper/FilterWrapper"
import { MainNavigation } from "@/components/MainNavigation"
import { Search } from "@/components/Search"

import { useAppDispatch, useAppSelector } from "@/hooks/hooks"

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

    const token = useAppSelector((store) => store.auth.token?.access);

    useEffect(() => {

        getFavoriteTracks(token).then(response => {
            // Долбаные разработчики засунули список треков в долбанный объект items, приходится  извлекать
            dispatch(setTracks(response));
            


        })
    }, [dispatch])

    return (
        <>
            <MainNavigation />
            <CenterBlock >
                <Search />
                <CenterBlockHeader text="Мой плейлист" />
                <FilterWrapper />
                <Content isFavorite/>
            </CenterBlock>

        </>
    )
}