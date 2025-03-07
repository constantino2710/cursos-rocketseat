import { Pizza, ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import {Avatar} from '../avatar/avatar.tsx'
import {useState} from 'react'
import { set } from 'date-fns';

interface CommentProps{
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps) {
	const[likeCount, setlikeCount] = useState(0);

	function handleDeleteComment(){
		onDeleteComment(content);
	}
	function handleLikeComment(){
		setlikeCount((state) =>{
			return state+1
		
		});
	}	

	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/claudioavgo.png" alt="User avatar"/>

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>

						<div className={styles.authorAndTime}>
							<strong>Clado</strong>
							<time title='23 de Dezembro às 1:30'
            dateTime="2024-12-23 01:30:00">Cerca de 1h atrás</time>
						</div>

						<button onClick={handleDeleteComment} title='deletar comentário'>
							<Trash size={24}/>
						</button>

					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={() => setlikeCount(likeCount + 1)}>
					<ThumbsUp/>
					aplaudir <span>{likeCount}</span>
					</button>
				</footer>

			</div>

		</div>
	)
}