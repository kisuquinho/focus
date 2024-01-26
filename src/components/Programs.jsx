import styles from './Programs.module.css';
import ProgramCard from './ProgramCard';

const Programs = () => {
    return (
        <section className={styles.programs}>
            <div className="container">
                <div className="t-wrapper">
                    <div className="t-bg"></div>
                    <h2>PROGRAMAS</h2>
                </div>
                <div className={styles.programs_wrapper}>
                    <div className={styles.p_row}>
                        <ProgramCard img={'./public/musc.avif'}>MUSCULAÇÃO</ProgramCard>
                        <ProgramCard img={'./public/crosf.avif'}>CROSFIT</ProgramCard>
                    </div>
                    <div className={styles.p_row}>
                        <ProgramCard img={'./public/zumb.avif'}>ZUMBA</ProgramCard>
                        <ProgramCard img={'./public/pilat.avif'}>PILATES</ProgramCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs;