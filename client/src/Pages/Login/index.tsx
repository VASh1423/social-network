import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../store/action/user';
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import './style.scss'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginCenter">
          <form className="loginBox">
            <Input 
              placeholder="Email"
              type='email' 
              required
              value={email}
              setValue={setEmail} 
            />
            <Input 
              placeholder="Password" 
              type='password' 
              required
              minLength={6}
              value={password}
              setValue={setPassword}
            />
            <Button color='#1775ee' onClick={(e: any) => dispatch(login(e, email, password))}>Войти</Button>
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
