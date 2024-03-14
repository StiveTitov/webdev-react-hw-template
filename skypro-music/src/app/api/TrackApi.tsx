

export interface intTrack {
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
interface StaredUser {
    email: string,
    first_name: string,
    id: number,
    last_name: string,
    usrname: string,
}
export function getAllTracks(): Promise<intTrack[]> {
    return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
        method: "GET",
    })
        .then(respons => {
            if (!respons.ok){
                throw new Error("Ошибка")
            }
            return respons.json()
        })
        .catch((error: Error)=>{
alert(error.message)
        })
}