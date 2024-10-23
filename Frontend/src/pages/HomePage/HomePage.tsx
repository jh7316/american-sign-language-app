import styles from './HomePage.module.scss'
import Header from '../../components/Header/Header'
import Overview from '../../components/Overview/Overview'
import Benefits from '../../components/Benefits/Benefits'
import Courses from '../../components/Courses/Courses'
import Footer from '../../components/Footer/Footer'

const HomePage = ()=>{

    return <div className={styles.main}>
        <Header />
        <Overview />
        <Benefits />
        <Courses />
        <Footer />
    </div>
}

export default HomePage