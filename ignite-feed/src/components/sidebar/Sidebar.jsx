import { PencilSimpleLine } from 'phosphor-react'
import styles from './sidebar.module.css'
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>

                <img className={styles.avatar}
                src="https://github.com/constantino2710.png" alt="Minha Foto" />

                <strong>João Constantino</strong>

                <span>web developer</span>

            </div>

            <footer>
                <a href="#">

                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                    
                    </a>
            </footer>
        </aside>
    )
}