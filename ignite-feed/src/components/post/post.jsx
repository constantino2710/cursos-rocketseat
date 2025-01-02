import { Comment } from '../comment/comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <img className={styles.avatar}
                src="https://github.com/constantino2710.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>João Constantino</strong>
                    <span>Web Developer</span>
                </div>

            </div>

            <time title='23 de Dezembro às 1:30'
            dateTime="2024-12-23 01:30:00">Publicado há 1h</time>

        </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=""> jane.design/doctorcare</a> </p>

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
