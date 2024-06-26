import * as React from 'react';
import styles from './LoginComponent.module.scss'; 

export default function LoginComponent() {
  return (
    <div className={styles.content}>
      <div className={styles.login}>
        <div className={styles.formComponent}>
          <div className={styles.headerSection}>
            <h1> Welcome Back!</h1>
            <p> Please login to continue. </p>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="username"> Enter in your username </label>
            <input id="usrname" type="text" className={styles.username} placeholder={"username"} />
            <label htmlFor="pw"> Enter in your password </label>
            <input id="w" type="password" className={styles.username} placeholder={"Password"} />
            <button className={styles.loginButton}> Login </button>
          </div>
        </div>
        <div className={styles.visual}>

        </div>
      </div>
    </div>
  )
}