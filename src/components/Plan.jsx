import styles from './Plan.module.css'
import Button from './Button';

/* eslint-disable react/prop-types */
const Plan = ({ children, title, price, icon, id }) => {

    return (
        <div id={styles[id]} className={styles.plan}>
            <div className={styles.p_banner}>
                <div className={styles.p_b_wrapper}>
                    <img src={icon} alt="" />
                    <h3>Plano <br /> <span>{title}</span></h3>
                </div>
                <h3 className={styles.price}>{price}</h3>
            </div>
            <div>{children}</div>
            <Button id={id} kind='plan'>ASSINAR</Button>
        </div>
)
}

export default Plan;