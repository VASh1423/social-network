import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Templates/Button';
import { Input } from '../../Templates/Input';
import './style.scss'

export const Register: React.FC = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerCenter">
          <form className="registerBox">
            <Input 
              placeholder="Username"
              type='text'
              required  
            />
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
            <Input 
              placeholder="Password Again" 
              type='password' 
              required 
              minLength={6}
            />
            <Button color='#1775ee'>Зарегистрироваться</Button>
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
