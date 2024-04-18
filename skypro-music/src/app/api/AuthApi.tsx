export type UserType = {
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
}

export type RegistrationType={
    email: string,
    password: string,
}
export async function Registration({email, password}:RegistrationType): Promise<void |UserType[]> {
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
            .then((response) => response.json())
            .then((json) => console.log(json));
   
}