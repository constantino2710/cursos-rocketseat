import { Comment } from '../comment/comment'
import styles from './Post.module.css'
import {Avatar} from '../avatar/avatar'

export function Post(){
    return (
        <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <Avatar src="https://github.com/igorcarvalheira.png"/>
                <div className={styles.authorInfo}>
                    <strong>Igor Japiassu</strong>
                    <span>Gay Developer</span>
                </div>

            </div>

            <time title='23 de Dezembro às 1:30'
            dateTime="2024-12-23 01:30:00">Publicado há 1h</time>

        </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifólio, o nome do projeto é catch the gay person, olhem lá.</p>
        <p><a href=""> I.guinho/japiass.u</a> </p>

        <p>
            <a href="">#novoprojeto</a> {' '} 
            <a href="">#nlw</a> {' '}
            <a href="">#rocketseat</a> {' '}
        </p>
        </div>

        <form className={styles.commentForm}>
            <strong>deixe seu feedback</strong>
            <textarea 
            placeholder='deixe seu comentário'
            />
            
            <footer>
            <button type='submit'>Publicar</button>
            </footer>

        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>

        </article>
    )
}
