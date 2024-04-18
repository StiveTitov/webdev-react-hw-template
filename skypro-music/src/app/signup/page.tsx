"use client"
import classNames from 'classnames'
import styles from './signup.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Registration, RegistrationType } from '../api/AuthApi';
function Signup() {
  //const {login}= useUser();
  const [loginData, setLoginData] = useState({
    mail: "",
    password: "",
  });

  async function setAuth(loginData: RegistrationType) {
    await Registration(loginData).then((data) => {
      // login(data.user)

    });
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
              />
              <button className={styles.modalBtnSignupEnt}>
                <Link href="/">Зарегистрироваться</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}
export default Signup