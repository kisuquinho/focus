import styles from './Testimonial.module.css'

/* eslint-disable react/prop-types */
const Testimonial = ({ id, name, job, comment, avatar }) => {

    return (
        <div id={id} className={styles.testimonial}>
            <div className={styles.profile}>
                <img src={avatar} alt="" />
                <div className={styles.p_person}>
                    <h6>{name}</h6>
                    <h5>{job}</h5>
                </div>    
            </div>
            <p>{comment}</p>
        </div>
)
}

export default Testimonial;