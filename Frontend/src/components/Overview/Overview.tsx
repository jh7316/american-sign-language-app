import styles from './Overview.module.scss'
import quoteImg from '../../assets/quote.svg'
import previewImg from '../../assets/overview-preview.svg'
import { useNavigate } from 'react-router-dom'

const Overview = ()=>{
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/courses/beginner')
    }

    return <div className={styles.main}>
        <div className={styles.preview}>
            <img src={previewImg} alt='preview' />
        </div>
        <div className={styles.explanation}>
            <h2>Learn to Speak with <br /> Your Hands and Heart.</h2>
            <p>With our interactive hand pose technology, you get real-time feedback while you learn—like having a personal ASL coach by your side!
                It’s fun, it’s engaging, and it helps you nail every sign as you go!</p>
            <button onClick={handleClick}>Start Now</button>
        </div>
        <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>
            Our mission is to make ASL accessible to all through an interactive and inclusive platform. We aim to bridge communication gaps using cutting-edge technology to foster connections and promote language inclusivity. 
            <br /><br />
            Join us in building a world where everyone can communicate—no matter the language.
            </p>
        </div>
        <div className={styles.quote}>
            <img src={quoteImg} alt='quote' />
            <p>
                “With every sign I learn, I feel more connected to a whole new world”
            </p>

        </div>
    </div>
}

export default Overview