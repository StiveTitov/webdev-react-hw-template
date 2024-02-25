import classNames from 'classnames'
import styles from './signup.module.css'
import Image from 'next/image';
import Link from 'next/link';
function Signup() {
    return (
<>
  
  
  <div className={styles.wrapper}>
    <div className={styles.containerSignup}>
      <div className={styles.modalBlock}>
        <form className={styles.modalFormLogin}>
          <Link href="/">
            <div className={styles.modalLogo}>
              <Image src="/img/logo_modal.png" alt="logo" 
              width= {140}
              height= {21}
              />
            </div>
          </Link>
          <input
            className={classNames(styles.modalInput,styles.login)}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
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