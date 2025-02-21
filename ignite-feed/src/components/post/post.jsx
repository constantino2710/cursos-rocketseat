import {format, formatDistanceToNow} from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'
import {useState} from 'react'

import { Comment } from '../comment/comment'
import {Avatar} from '../avatar/avatar'

import styles from './Post.module.css'





export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
       'post muito bacana, hein?'
    ])

    const [newCommentText , setNewCommentText] = useState('')

    const publishedDateformat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeFromNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

        

    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }



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
                    return <p key={Line.content}>{Line.content}</p>
                } else if (Line.type =='link'){
                    return <p key={Line.content}><a href='#'>{Line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>deixe seu feedback</strong>
            
            <textarea 
            name ='comment'
            placeholder='deixe seu comentário'
            value ={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
            />
            
            <footer>
            <button type='submit'>Publicar</button>
            </footer>

        </form>
        <div className={styles.commentList}>
            {comments.map(comment =>{
                return (
                <Comment 
                    key={comment} 
                    content={comment}
                    onDeleteComment={deleteComment}
                    />
                )
            })}
        </div>

        </article>
    )
}
