import styles from './Testimonials.module.css'
import Testimonial from './Testimonial';

const reviews = [
    {
        id: 'aaa',
        name: 'Marina Dutra',
        job: 'Nutricionista',
        comment: '"A equipe dedicada e altamente qualificada da academia desempenha um papel fundamental na criação de uma experiência positiva para os membros. A academia focus promove uma abordagem integrada, equipe dedicada e instalações de alta qualidade."',
        avatar: './julia.avif',
    },
    {
        id: 'bbb',
        name: 'Paulo Souza',
        job: 'Educador físico',
        comment: '"A Focus se destaca como uma referência para aqueles que buscam uma jornada de bem-estar físico e mental."',
        avatar: './joao.avif',
    },
    {
        id: 'ccc',
        name: 'Joana Darc',
        job: 'Jornalista',
        comment: '"Estrutura qualificada e ambiente agradável."',
        avatar: './joana.avif',
    },
];


const Testimonials = () => {
    return (
        <section>
            <div className='container'>
                <div className="t-wrapper">
                        <div className="t-bg"></div>
                        <h2>O QUE COMENTAM...</h2>
                    </div>
                <div className={styles.grid}>
                    {reviews.map((review) => (
                            // eslint-disable-next-line react/jsx-key
                            <Testimonial key={review.id} id={review.id} name={review.name} job={review.job} comment={review.comment} avatar={review.avatar}>
                            </Testimonial>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;