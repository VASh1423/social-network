import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import './style.scss'

export const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginCenter">
          <form className="loginBox">
            <Input 
              placeholder="Email"
              type='email' 
              required
            />
            <Input 
              placeholder="Password" 
              type='password' 
              required
              minLength={6}
            />
            <Button color='#1775ee'>Войти</Button>
            <span className="loginForgot">Забыли пароль?</span>
            <Link to='/register'>
              <Button color='#42b72a'>
                Создать новый аккаунт
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
