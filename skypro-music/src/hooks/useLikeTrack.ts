import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { refreshToken } from "@/app/api/AuthApi";
import { disLike, like } from "@/app/api/TrackApi";

export function useLikeTrack(track, isFavorite) {
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((store) => store.auth.userData);
    const [isLiked, setIsLiked] = useState(false);
    const tokenInfo = useAppSelector((store) => store.auth.token);
    useEffect(() => {
        const checkLike = isFavorite || !!track?.stared_user?.find((user) => user.id === userInfo?.id)
        
        setIsLiked(checkLike)
    }, [track])

    function requestWithRefresh(request) {
        refreshToken(tokenInfo?.refresh).then((token) => {
            if (token === 400) {
                alert("Чтобы поставить лайк нужно авторизоваться");
                return
            } else {
                dispatch(setToken({ ...tokenInfo, access: token.access }));
                localStorage.setItem(
                    "tokenRefresh",
                    JSON.stringify({ ...tokenInfo, access: token.access })
                );
                return request(token.access);
            }
        });
    }
    function setDislike(token) {
        disLike({
            id: track.id,
            token,
        }).then((response) => {
            if (response === 200) {
                setIsLiked((prev) => !prev);
            } else {
                if (response === 401) {
                    requestWithRefresh(setDislike);
                } else if (response === 400) {
                    console.log('Ошибка!');
                    return
                }
            }
        });
    }
    function setLike(token) {
        like({
            id: track.id,
            token,
        }).then((response) => {
            if (response === 200) {
                setIsLiked((prev) => !prev);
            } else {
                if (response === 401) {
                    requestWithRefresh(setLike);
                } else if (response === 400) {
                    console.log('Ошибка!');
                    return
                }
            }
        });
    }
    function handleLike(e) {
        e.stopPropagation();
        try {
            if (isLiked) {
                try {
                    setDislike(tokenInfo?.access);
                } catch (error) {
                    console.log("Ошибка disLike:" + error);
                }
            } else {
                try {
                    setLike(tokenInfo?.access);
                } catch (error) {
                    console.log("Ошибка setLike:" + error);
                }
            }
        } catch (error) {
            console.log("Ошибка:" + error);
        }
    }
    return {
        isLiked, handleLike
    }
}