import {Header} from './components/header/header'
import {Post} from './components/post/post'
import {Sidebar} from './components/sidebar/sidebar'	

import styles from './App.module.css'
import './global.css'

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post />
        <Post />



        </main>
      </div>
    </div>
  )
}

