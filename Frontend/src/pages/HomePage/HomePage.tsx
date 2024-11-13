import styles from './HomePage.module.scss'
import Overview from '../../components/Overview/Overview'
import Benefits from '../../components/Benefits/Benefits'
import Courses from '../../components/Courses/Courses'

const HomePage = ()=>{

    return <div className={styles.main}>
        <Overview />
        <Benefits />
        <Courses />
    </div>
}

export default HomePage