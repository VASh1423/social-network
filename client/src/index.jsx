import './styles/style.css'
import csv from './assets/data.csv'
import xml from './assets/data.xml'
import Post from '@models/Models'
import './styles/less.less'
import './styles/scss.scss'
import React from 'react'
import {render} from 'react-dom'

const post = Post

const a = 5

async function start(){
  return await Promise.resolve('async is working')
}

start().then(console.log)

class Util{
  static id = Date.now()
}

const App = () => (
  <>
    <div>Hello world</div>
    <div class="photo"></div>
    <hr/>
    <div class="box">
      <h2>less</h2>
    </div>
    <hr/>
    <div class="card">
      <h2>scss</h2>
    </div>
  </>
)

render(<App/>, document.getElementById('app'))

console.log('Util', Util.id);

console.log('webpack');
console.log('web');
console.log(csv);
console.log(xml);
console.log(post.getPost());