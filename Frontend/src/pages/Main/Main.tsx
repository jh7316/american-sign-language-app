import styles from './Main.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Outlet} from 'react-router-dom'

const Main = ()=> {
    return <div className={styles.main}>
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default Main