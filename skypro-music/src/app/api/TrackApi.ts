import { useAppDispatch, useAppSelector } from "@/hooks/hooks"
import { refreshToken } from "./AuthApi"
import { store } from "@/store/store"

export type TracksType = {
    album: string,
    author: string,
    duration_in_seconds: string,
    genre: string,
    id: number,
    logo: null,
    name: string,
    release_date: string,
    stared_user: StaredUser[],
    track_file: string,
}
type StaredUser = {
    email: string,
    first_name: string,
    id: number,
    last_name: string,
    usrname: string,
}
export type CategoryTracks = {
    items: TracksType[],
    name: string,
    owner: string,
}

export type Categorylist = {
    items: TracksType[],
    name: string,
    owner: string,
}

export type LikeType = {
    token: string | undefined,
    id: number,

}

export type LikePromiseType = {}

export async function getAllTracks(): Promise<TracksType[]> {

    return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
        method: "GET",
    })
        .then(respons => {
            if (!respons.ok) {
                throw new Error("Ошибка")
            }
            return respons.json()
        })
        .catch((error: Error) => {
            alert(error.message)
        })
}
// Тут на запрос приходит обьект, который  содержит в себе массив объектов, это надо учитывать
export async function getCategoryTracks(URL: string): Promise<CategoryTracks> {

    return fetch(URL, {
        method: "GET",
    })
        .then(respons => {
            if (!respons.ok) {
                throw new Error("Ошибка")
            }
            return respons.json()
        })
        .catch((error: Error) => {
            alert(error.message)
        })
}

export async function getCategoryList(): Promise<CategoryTracks> {

    return fetch("https://skypro-music-api.skyeng.tech/catalog/selection/", {
        method: "GET",
    })
        .then(respons => {
            if (!respons.ok) {
                throw new Error("Ошибка")
            }
            return respons.json()
        })
        .catch((error: Error) => {
            alert(error.message)
        })
}

export async function like({ token, id }: LikeType): Promise<LikePromiseType> {

    return fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: "POST",


        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "authorization": `Bearer ${token}`
        },
    })
        .then(response => {


            return response.status


        })


}

export async function disLike({ token, id }: LikeType): Promise<LikePromiseType> {

    return fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
        method: "DELETE",


        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "authorization": `Bearer ${token}`
        },
    })
        .then(response => {


            return response.status


        })


}

export async function getFavoriteTracks(token: string): Promise<CategoryTracks> {

    return fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
        method: "GET",
        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "authorization": `Bearer ${token}`
        },
    })
        .then(respons => {
            if (!respons.ok) {
                throw new Error("Ошибка")
            }
            return respons.json()
        })
        .catch((error: Error) => {
            throw Error
        })
}
