
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