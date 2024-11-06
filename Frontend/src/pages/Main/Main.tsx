import styles from './Main.module.scss'
import Header from '../../components/Header/Header'
import {Outlet} from 'react-router-dom'

const Main = ()=> {
    return <div className={styles.main}>
        <Header />
        <Outlet />
    </div>
}

export default Main