import {Header} from './components/header/header.tsx'
import {Post} from './components/post/post.tsx'
import {Sidebar} from './components/sidebar/Sidebar'	

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/igorcarvalheira.png',
      name: 'Igor Japiassu',
      role: 'Gay Developer'
    },
    content: [
      {type: 'paragraph' as 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' as 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, o nome do projeto é catch the gay person, olhem lá.'},
      {type: 'link' as 'link', content: 'I.guinho/japiass.u'},
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
      {type: 'paragraph' as 'paragraph', content: 'eae meu povo 👋'},
      {type: 'paragraph' as 'paragraph', content:'Acabei de subir mais um projeto no meu portifólio, o nome do projeto é catch the gay person, olhem lá.'},
      {type: 'link' as 'link', content: 'Claudio.AVGO.com.br'},
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
              key={post.id}
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

