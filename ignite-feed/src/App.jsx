import {Header} from './components/header/header'
import {Post} from './components/post/post'
import {Sidebar} from './components/sidebar/sidebar'	

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/igorcarvalheira.png',
      name: 'Igor Japiassu',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, o nome do projeto é catch the gay person, olhem lá.'},
      {type: 'link', content: 'I.guinho/japiass.u'},
    ],
    publishedAt: new Date('2025-01-07 17:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/claudioAVGO.png',
      name: 'Claudio Álves',
      role: 'Tanga Developer'
    },
    content: [
      {type: 'paragraph', content: 'eae meu povo 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, o nome do projeto é catch the gay person, olhem lá.'},
      {type: 'link', content: 'Claudio.AVGO.com.br'},
    ],
    publishedAt: new Date('2024-12-25 17:35:00'),
  },
];

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return(
              <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

