import './styles/style.css'
import csv from './assets/data.csv'
import xml from './assets/data.xml'
import Post from '@models/Models'

const post = Post

console.log('webpack');
console.log('web');
console.log(csv);
console.log(xml);
console.log(post.getPost());