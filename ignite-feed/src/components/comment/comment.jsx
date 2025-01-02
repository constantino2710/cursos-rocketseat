import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
export function Comment () {
	return(
		<div className={styles.comment}>
			<img src="https://github.com/constantino2710.png" alt="" />

			<div className={styles.commentBox}>

				<div className={styles.commentContent}>
					<header>

						<div className={styles.authorAndTime}>
							<strong>João Constantino</strong>
							<time title='23 de Dezembro às 1:30'
            dateTime="2024-12-23 01:30:00">Cerca de 1h atrás</time>
						</div>

						<button title='deletar comentário'>
							<Trash size={24}/>
						</button>

					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
					<ThumbsUp/>
					aplaudir <span>20</span>
					</button>
				</footer>

			</div>

		</div>
	)
}