"use client"
import classNames from 'classnames'
import styles from './signup.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Registration } from '../api/AuthApi';

type AuthType = {
  mail: string,
  password: string,
  conformedPassword: string,
}


function Signup() {
  //const {login}= useUser();
  const [loginData, setLoginData] = useState({
    mail: "",
    password: "",
    conformedPassword: "",
  });

  const [isConformedPass, setIsConformedPass] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  async function setAuth(event, loginData: AuthType) {
    event.preventDefault()
    loginData.mail===""? setIsEmail(false):setIsEmail(true);
    loginData.password === loginData.conformedPassword ? setIsConformedPass(true) : setIsConformedPass(false)
    console.log(loginData);
    // await Registration(loginData).then((data) => {
    //   // login(data.user)

    // });
  }

  function onEmailChange(event) {
    //Следит за состоянием поля ввода логина
    setLoginData({
      ...loginData,
      mail: event.target.value,
    });
  }

  function onPasswordChange(event) {
    //Следит за состоянием поля ввода пароля
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  }

  function onConfPasswordChange(event) {
    //Следит за состоянием поля ввода пароля
    setLoginData({
      ...loginData,
      conformedPassword: event.target.value,
    });
  }

  return (
    <>


      <div className={styles.wrapper}>
        <div className={styles.containerSignup}>
          <div className={styles.modalBlock}>
            <form className={styles.modalFormLogin}>
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
                value={loginData.mail}
                onChange={onEmailChange}
              />
              <div className={styles.modalErrText}>
                {isEmail ? "" : "Ошибка: укажите почту"}
              </div>
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
                value={loginData.password}
                onChange={onPasswordChange}
              />
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Повторите пароль"
                value={loginData.conformedPassword}
                onChange={onConfPasswordChange}
              />
              <div className={styles.modalErrText}>
                {isConformedPass ? "" : "Ошибка: пароли не совпадают"}
              </div>
              <button className={styles.modalBtnSignupEnt}
                onClick={(event) => setAuth(event, loginData)}
              >
                {/* <Link href="/">Зарегистрироваться</Link> */}

              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}
export default Signup