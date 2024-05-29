import { promises } from "dns";


export type UserType = {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
}


export type RegistrationType = {
    email: string,
    username?: string,
    password: string,
}

export type TokenType = {
    refresh: string,
    access: string,
}
export async function Registration({ email, username, password }: RegistrationType): Promise<void | UserType[]> {
    return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        body: JSON.stringify({
            email,
            username,
            password,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text)
                })

            }

            getToken(email, password);
            return response.json()

        })
        .catch((error: Error) => {
            console.log(error.message);
        })
        .then((json) => console.log(json));

}

export async function Authorization({ email, password }: RegistrationType): Promise<void | UserType[]> {

    const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    })
        .then(response => {

            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text)
                })
            }

            getToken(email, password);
            return response.json();


        })
        .catch((error: Error) => {
            console.log(error.message);
        })

        .then((json) => console.log(json));

}

export async function getToken(email: string, password: string): Promise<void | TokenType[]> {
    fetch("https://skypro-music-api.skyeng.tech/user/token/", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

export async function refreshToken(): Promise<void | TokenType[]> {
    
        fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
            method: "POST",
            body: JSON.stringify({
                refresh: null,
            }),
            headers: {
                // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
                "content-type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}