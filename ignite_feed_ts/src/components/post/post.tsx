import {format, formatDistanceToNow} from 'date-fns' 
import {ptBR} from 'date-fns/locale/pt-BR'
import {FormEvent, useState, ChangeEvent, InvalidEvent} from 'react'

import { Comment } from '../comment/comment.tsx'
import {Avatar} from '../avatar/avatar.tsx'

import styles from './Post.module.css'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType;
}


export function Post({post}: PostProps){
    const [comments, setComments] = useState([
       'post muito bacana, hein?'
    ])

    const [newCommentText , setNewCommentText] = useState('')

    const publishedDateformat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeFromNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,

    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');

        

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete: string){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }


    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>

        <header>
            <div className={styles.author}>
                <Avatar src={post.author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>

            </div>

            <time title={publishedDateformat}
            dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeFromNow}</time>

        </header>

        <div className={styles.content}>
            {post.content.map(Line =>{
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
            <button type='submit' disabled={isNewCommentEmpty}>
                Publicar</button>
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
