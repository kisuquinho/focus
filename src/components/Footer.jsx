import styles from './Footer.module.css';

const Footer = () => {

    const classColum = `${styles.column} ${styles.adress}`;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="t-wrapper">
                    <div className="t-bg"></div>
                    <h2>CONTATO</h2>
                </div>
                <div className={styles.footer_content}>
                    <div className={styles.column}>
                        <div className={styles.topic}>
                            <h5>Email</h5>
                            <h6>academiafocus@focus.br</h6>
                        </div>
                        <div className={styles.topic}>
                            <h5>Telefone</h5>
                            <h6>(33) 99980 - 4680</h6>
                        </div>
                        <div className={styles.topic}>
                            <h5>Mídias Sociais</h5>
                            <div className={styles.s_wrapper}>
                                <a href='#' className={styles.social}>
                                    <img src="./public/ig.svg" alt="" />
                                </a>
                                <a href='#' className={styles.social}>
                                    <img src="./public/tt.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={classColum}>
                        <div className={styles.topic}>
                            <h5>Endereço</h5>
                            <h6>Av. Nilton Santos, Dois Córregos, SP</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666059.676467253!2d-49.77120600243549!3d-22.82529865481185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8783528c20d3%3A0x6f1dd7766c8bb1ed!2sAcademia%20Focus!5e0!3m2!1spt-BR!2sbr!4v1706214741084!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;