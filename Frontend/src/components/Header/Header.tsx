import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import Menu from './Menu/Menu'

const MENU_LIST = [
    {
        name:'Courses',
        items:[
            'Beginner',
            'Intermediate',
            'Advanced',
        ]
    },
    {
        name:'Resources',
        items:[
            'ASL Dictionary',
            'Video Library',
            'Deaf Culture',
        ]
    },
    {
        name:'Community',
        items:[
            'Forum',
            'Connect',
            'Events',
        ]
    },
    {
        name:'Help',
        items:[
            'About Us',
            'FAQ',
            'Contact Us',
        ]
    },
]

const Header = ()=>{
    return <div className={styles.main}>
        <Link to='/' className={styles.link}>
            <img src={logo} alt="logo" />
        </Link>
        <menu>
            {MENU_LIST.map((item)=><Menu {...item} />)}
        </menu>
        <div className={styles.buttons}>
            <button className={styles.login}>Login</button>
            <button className={styles.register}>Register</button>
        </div>

    </div>
}

export default Header