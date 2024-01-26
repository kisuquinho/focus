import styles from './ProgramCard.module.css';

// eslint-disable-next-line react/prop-types
const ProgramCard = ({ children, img }) => {
    return (
        <div className={styles.programcard}>
            <img src={img} alt="" />
            <h4>{children}</h4>
            <div className={styles.overlay_neutral}></div>
            <div className={styles.overlay_accent}></div>
        </div>
    )
}

export default ProgramCard;