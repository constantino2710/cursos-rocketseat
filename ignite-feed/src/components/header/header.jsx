import styles from'./header.module.css'

import ignitelogo from '../../assets/ignitelogo.svg'

export function Header() {
    return(

        <header className={styles.header}>
            <img src={ignitelogo} alt="Logo do Ignite" />
        </header>

    )
}
