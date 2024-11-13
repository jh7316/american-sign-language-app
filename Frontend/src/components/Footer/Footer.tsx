import styles from './Footer.module.scss'
import logo from '../../assets/logo_footer.svg'
import { x,ig,fb } from '../../assets/social'

const Footer = ()=>{
    return <footer className={styles.main}>
        <div className={styles.list}>
            <ul>
                <h3>Courses</h3>
                <li>Beginner</li>
                <li>Intermediate</li>
                <li>Advanced</li>
            </ul>
            <ul>
                <h3>Contact & Support</h3>
                <li>About</li>
                <li>Contact Information</li>
                <li>Help</li>
                <li>FAQs</li>
            </ul>
            <ul>
                <h3>Legal Information</h3>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            <ul>
                <h3>FOLLOW US</h3>
                <li className={styles.social}>
                    <img src={x} alt='x' />
                    <img src={ig} alt='ig' />
                    <img className={styles.fb} src={fb} alt='fb' />
                </li>
            </ul>
        </div>
        <div className={styles.logo}>
            <img src={logo} alt='logo' />
            <p>© 2024 handTalk.com All Rights Reserved.</p>
        </div>
    </footer>
}

export default Footer