const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const {validationResult} = require('express-validator')

const generateAccessToken = (id, username) => {
  const payload = {
    id,
    username
  }

  return jwt.sign(payload, config.get('secretKey'), {expiresIn: "24h"})
}

class authController{
  async registration(req, res){
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({message: "Ошибка при регистрации", errors})
      }

      const candidate = await User.findOne({'email': req.body.email})
      if(candidate){
        return res.status(400).json({message: "Пользователь с таким email уже создан"})
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
  
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      })
  
      const user = await newUser.save()
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async login(req, res){
    try {
      const user = await User.findOne({'email': req.body.email})
      !user && res.status(404).json('user not found')
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(404).json('wrong password')

      const token = generateAccessToken(user._id, user.username)
  
      res.status(200).json({token})
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = new authController()