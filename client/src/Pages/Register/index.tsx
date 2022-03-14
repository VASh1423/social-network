import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { registration } from '../../store/action/user';
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import './style.scss'

export const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerCenter">
          <form className="registerBox">
            <Input 
              placeholder="Username"
              type='text'
              required
              value={username}
              setValue={setUsername}
            />
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
            <Input 
              placeholder="Password Again" 
              type='password' 
              required 
              minLength={6}
              value={repeatPassword}
              setValue={setRepeatPassword}
            />
            <Button color='#1775ee' onClick={(e: any) => registration(e, username, email, password, repeatPassword)}>Зарегистрироваться</Button>
            <Link to='/login'>
              <Button color='#42b72a'>
                Войти в аккаунт
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
