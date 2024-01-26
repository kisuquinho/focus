import styles from './Plans.module.css'
import Plan from './Plan';

const plans = [
    {
        id: 'visitante',
        title: 'Visitante',
        icon: './public/headphones.svg',
        price: '129,90',
        advantages: <div className={styles.advantages}>
            <div className={styles.advantage}>
                <img src="./public/included.svg" alt="" />
                <p>Treino 2x na semana</p>
            </div>
            <div className={styles.advantage}>
                <img src="./public/included.svg" alt="" />
                <p>Horário livre</p>
            </div>
            <div className={styles.advantage}>
                <img src="./public/included.svg" alt="" />
                <p>Acesso a 1 programa</p>
            </div>
        </div>,
    },
    {
        id: 'maromba',
        title: 'Maromba',
        icon: './public/target.svg',
        price: '259,90',
        advantages: <div className={styles.advantages}>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Treino todos os dias</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Horário livre</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Acesso a todos os programas</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Acompanhamento físico e nutricional</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Avaliação física e teste de carga gratuitos</p>
        </div>
    </div>,
    },
    {
        id: 'focado',
        title: 'Focado',
        icon: './public/loader.svg',
        price: '189,90',
        advantages: <div className={styles.advantages}>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Treino 3x na semana</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Horário livre</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Acesso a 2 programas</p>
        </div>
        <div className={styles.advantage}>
            <img src="./public/included.svg" alt="" />
            <p>Teste de carga gratuito</p>
        </div>
    </div>,
    },
];

/* eslint-disable react/prop-types */
const Plans = () => {

    return (
        <section>
            <div className='container'>
                <div className="t-wrapper">
                        <div className="t-bg"></div>
                        <h2>NOSSOS PLANOS</h2>
                    </div>
                <div className={styles.plans}>
                    {plans.map((plan) => (
                            // eslint-disable-next-line react/jsx-key
                            <Plan key={plan.id} title={plan.title} price={plan.price} icon={plan.icon} id={plan.id}>
                                {plan.advantages}
                            </Plan>
                    ))}
                </div>
            </div>
        </section>
)
}

export default Plans;