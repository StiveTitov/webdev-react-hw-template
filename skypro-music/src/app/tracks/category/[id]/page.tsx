"use client"
import { getCategoryTracks } from "@/app/api/TrackApi"
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



export default function Category({ params }: CategoryType) {
    const id = params.id;
    const [text, setText] = useState("");

    const URL = `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`;




    const dispatch = useAppDispatch();
    const tracks = useAppSelector((store) => store.playlist.tracks);



    useEffect(() => {
        getCategoryTracks(URL).then(response => {
            // Долбаные разработчики засунули список треков в долбанный объект items, приходится  извлекать
            dispatch(setTracks(response.items));
            setText(response.name);


        })
    }, [dispatch])

    return (
        <>
            <MainNavigation />
            <CenterBlock>
                <Search />
                <CenterBlockHeader text={text} />
                <FilterWrapper />
                <Content />
            </CenterBlock>

        </>
    )
}