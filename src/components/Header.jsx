import styles from './Header.module.css';
import Button from './Button';

const Header = () => {
    return (
        <header>
            <div className="container">
                <a className={styles.logo} href="#" target="_blank" rel="noopener noreferrer">FOCUS</a>
                <nav>
                    <ul>
                        <li><a href="#">SOBRE</a></li>
                        <li><a href="#">CONTATO</a></li>
                        <li>
                            <Button kind="header">ASSINAR</Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;