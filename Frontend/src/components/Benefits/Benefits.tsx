import styles from './Benefits.module.scss'
import { BENEFITS } from '../../constants/constants'



const Benefits = ()=>{
    return <div className={styles.main}>
        <h2>Benefits of Learning ASL</h2>
        <ul>
            {BENEFITS.map((el)=><li key={el.title}>
                <img src={el.img} alt='image' />
                <div>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                </div>
            </li>)}
        </ul>
    </div>
}

export default Benefits