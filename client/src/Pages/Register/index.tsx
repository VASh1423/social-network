import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

export const Register: React.FC = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerCenter">
          <form className="registerBox">
            <input 
              placeholder="Username" 
              className="registerInput" 
            />
            <input 
              placeholder="Email" 
              type='email' 
              required 
              className="registerInput" 
            />
            <input 
              placeholder="Password" 
              type='password' 
              required 
              className="registerInput" 
              minLength={6}
            />
            <input 
              placeholder="Password Again" 
              type='password' 
              required 
              className="registerInput"
              minLength={6}
            />
            <button className="registerButton" type='submit'>Зарегистрироваться</button>
            <Link to='/login'>
              <button className="registerLoginButton">
                Войти в аккаунт
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
