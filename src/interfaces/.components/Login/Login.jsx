import React, { Fragment, useState } from 'react';

import styles from './Login.module.scss';

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isPassVisible, setIsPassVisible] = useState(false);

  const onTogglePass = () => setIsPassVisible(!isPassVisible);

  const onToggleView = () => setIsLogin(!isLogin);

  return (
    <Fragment>
      <div className={styles.logForm}>
        <div className={`${styles.signup} ${!isLogin ? styles.slideUp : ''}`}>
          <h2 className={styles.formTitle} onClick={() => onToggleView()}>
            <span>or</span>Registrate
          </h2>
          <div className={styles.formHolder}>
            <div className={styles.inputWrap}>
              <input type="text" className={styles.input} placeholder="Nombre" />
            </div>
            <div className={styles.inputWrap}>
              <input id="logInPass" type="email" className={styles.input} placeholder="Email" />
            </div>
            <div className={styles.inputWrap}>
              <input className={styles.input} id="pass" placeholder="Contraseña" type="password" />
              <i id="eye" className="fa fa-eye showPass"></i>
            </div>
          </div>
          <button className={styles.submitButton}>Registrate</button>
        </div>
        <div className={`${styles.login} ${isLogin ? styles.slideUp : ''}`}>
          <div className={styles.center}>
            <h2 className={styles.formTitle} onClick={() => onToggleView()}>
              <span>o</span>Inicia sesión
            </h2>
            <div className={styles.formHolder}>
              <input type="email" className={styles.input} placeholder="Email" />
              <input
                className={styles.input}
                id="pwd"
                placeholder="Contraseña"
                type={isPassVisible ? 'text' : 'password'}
              />
            </div>
            <button className={styles.submitButton}>Inicia sesión</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
