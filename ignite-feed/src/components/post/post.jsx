import {format, formatDistanceToNow} from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from '../comment/comment'
import styles from './Post.module.css'
import {Avatar} from '../avatar/avatar'

export function Post({author, publishedAt, content}){
    const publishedDateformat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeFromNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })


    return (
        <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>

            </div>

            <time title={publishedDateformat}
            dateTime={publishedAt.toISOString()}>{publishedDateRelativeFromNow}</time>

        </header>

        <div className={styles.content}>
            {content.map(Line =>{
                if (Line.type == 'paragraph'){
                    return <p>{Line.content}</p>
                } else if (Line.type =='link'){
                    return <p><a href='#'>{Line.content}</a></p>
                }
            })}
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
        </div>

        </article>
    )
}
