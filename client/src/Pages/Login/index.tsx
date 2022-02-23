import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

export const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginCenter">
          <form className="loginBox">
            <input 
              placeholder="Email"
              className="loginInput" 
              type='email' 
              required
            />
            <input 
              placeholder="Password" 
              type='password' 
              className="loginInput" 
              required
              minLength={6}
            />
            <button className="loginButton" type="submit">
              Войти
            </button>
            <span className="loginForgot">Забыли пароль?</span>
            <Link to='/register'>
              <button className="loginRegisterButton">
                Создать новый аккаунт
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
