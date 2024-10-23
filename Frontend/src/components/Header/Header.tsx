import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'


const Header = ()=>{
    return <div className={styles.main}>
        <Link to='/' className={styles.link}>
            <img src={logo} alt="logo" />
        </Link>
        <menu>
            <Link to='/' className={styles.link}>Courses</Link>
            <Link to='/' className={styles.link}>Resources</Link>
            <Link to='/' className={styles.link}>Communities</Link>
            <Link to='/' className={styles.link}>Help</Link>
        </menu>
        <div className={styles.buttons}>
            <button className={styles.login}>Login</button>
            <button className={styles.register}>Register</button>
        </div>

    </div>
}

export default Header