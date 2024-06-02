"use client"
import classNames from 'classnames'
import styles from './signin.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AuthType, Authorization, getToken } from '../api/AuthApi';
import { useRouter } from 'next/navigation';
import { clearScreenDown } from 'readline';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setAuthState, setToken, setUserData } from '@/store/features/authSlice';
import { store } from '@/store/store';



function Signin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });

  const [isConformedPass, setIsConformedPass] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [textErrPass, setTextErrPass] = useState("");
  const isUserAuth = useAppSelector((store) => store.auth.isAuthState);

  console.log("Состояние пользователя:" + isUserAuth);


  async function setAuth(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, loginData: AuthType) {
    e.preventDefault()
    loginData.email === "" ? setIsEmail(false) : setIsEmail(true);
    loginData.password === "" ? setIsConformedPass(false) : setIsConformedPass(true)
    console.log("Login data: " + loginData.email + " " + loginData.password);
    localStorage.setItem('user', JSON.stringify(loginData)); // Помещаем данные пользователя в 
    // локальное хранилище localStorage 
    await Authorization(loginData).then(response => {

      if (response) {
        dispatch(setUserData(response));
        dispatch(setAuthState());
         
        getToken(loginData).then(token => {
          if (token) {
            dispatch(setToken(token));
            localStorage.setItem('tokenRefresh', token.refresh);
          } else {
            return (console.log("Ошибка. Ответ getToken:" + token))
          }
        });
        router.push("/tracks");
      } else {
        return (console.log("Ошибка. Ответ авторизации:" + response))
      }

    });
  }
  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    //Следит за состоянием поля ввода логина
    setLoginData({
      ...loginData,
      email: e.target.value,
    });
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    //Следит за состоянием поля ввода пароля
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  }
  return (

    <>

      <div className={styles.wrapper}>
        <div className={styles.containerEnter}>
          <div className={styles.modalBlock}>
            <form className={styles.modalFormLogin} action="#">
              <Link href="/">
                <div className={styles.modalLogo}>
                  <Image src="/img/logo_modal.png" alt="logo"
                    width={140}
                    height={21}
                  />
                </div>
              </Link>
              <input
                className={classNames(styles.modalInput, styles.login)}
                type="email"
                name="login"
                placeholder="Почта"
                value={loginData.email}
                onChange={onEmailChange}
              />
              <div className={styles.modalErrText}>
                {isEmail ? "" : "Ошибка: укажите почту"}
              </div>
              <input
                className={classNames(styles.modalInput, styles.password)}
                type="password"
                name="password"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <div className={styles.modalErrText}>
                {isConformedPass ? "" : "Введите пароль"}
              </div>
              <button className={styles.modalBtnEnter}
                onClick={(e) => setAuth(e, loginData)}
              >

                {/* <Link href="/">Войти</Link> */}
                Войти
              </button>
              <button className={styles.modalBtnSignup}>
                <Link href="/signup">Зарегистрироваться</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin