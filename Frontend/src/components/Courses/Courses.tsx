import styles from './Courses.module.scss'
import Course from './Course/Course'
import { COURSES } from '../../constants/constants'

const Courses = ()=>{

    const handleClick = ()=>{
        window.location.href = '/courses/beginner'
    }


    return <div className={styles.main}>
        <h2>Courses</h2>
        <div className={styles.courses}>
            {COURSES.map((item)=><Course key={item.title} course={item}/>)}
        </div>
        <button onClick={handleClick}>Start Now</button>
    </div>
}

export default Courses