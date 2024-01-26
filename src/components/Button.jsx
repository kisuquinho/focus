/* eslint-disable react/prop-types */
import styles from './Button.module.css'

const Button = ( { children, kind, id } ) => {
    const className = `${styles.button} ${styles[kind]}`;

    return (
        <a id={styles[id]} href='#' target='_blank' rel="noopener noreferrer" className={className}>{children}</a>
    )
}

export default Button;