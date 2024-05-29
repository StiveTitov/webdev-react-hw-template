"use client"
import classNames from 'classnames'
import styles from './signin.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Authorization } from '../api/AuthApi';
import { useRouter } from 'next/navigation';
import { clearScreenDown } from 'readline';

type AuthType = {
  email: string,
  password: string,
}

function Signin() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });

  const [isConformedPass, setIsConformedPass] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [textErrPass, setTextErrPass] = useState("");
  async function setAuth(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, loginData: AuthType) {
    e.preventDefault()
    loginData.email === "" ? setIsEmail(false) : setIsEmail(true);
    loginData.password === "" ? setIsConformedPass(false) : setIsConformedPass(true)
    console.log("Login data: " + loginData.email + " " + loginData.password);
    await Authorization(loginData).then((data) => {

      if (!data) {
        router.push("/tracks");
      } else {
        return (console.log("Ошибка. Ответ авторизации:" + data))
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