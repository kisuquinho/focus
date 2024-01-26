import styles from './Hero.module.css';
import Button from './Button';

const Hero = () => {
    return (
        <main className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className="container">
                <h1><span>ELEVE SEU</span> <br />
                    POTENCIAL</h1>
                <Button kind="hero">ASSINAR</Button>
            </div>
        </main>
    )
}

export default Hero;