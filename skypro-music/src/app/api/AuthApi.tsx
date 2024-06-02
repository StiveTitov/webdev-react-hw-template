export type AuthType = {
    email: string,
    username?: string,
    password: string,
    conformedPassword?: string,
}

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
export async function Registration({ email, username, password }: RegistrationType): Promise<UserType> {
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

            return response.json()

        })
        .catch((error: Error) => {
            console.log(error.message);
        })


}

export async function Authorization({ email, password }: RegistrationType): Promise<UserType> {

    return fetch("https://skypro-music-api.skyeng.tech/user/login/", {
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

            return response.json();


        })
        .catch((error: Error) => {
            console.log(error.message);
        })

}

export async function getToken(loginData: AuthType): Promise<TokenType> {
    const email = loginData.email;
    const password = loginData.password;
    return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
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
}

export async function refreshToken(): Promise<TokenType> {

    return fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
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

}
