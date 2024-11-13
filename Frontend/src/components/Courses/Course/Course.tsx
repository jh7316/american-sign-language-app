import styles from './Course.module.scss'

const TRANSPARENCY = ['33','80','FF']

interface propType {
    course: Course
}

const Course: React.FC<propType> = ({course})=>{
    return <div className={styles.main}>
        <h3>{course.title}</h3>
        <img src={course.imageUrl} alt='level' />
        <ul className={styles.stages}>
            {course.contents.map((item,ind)=><>
                <li className={styles.stage} key={item.title} style={{backgroundColor: `${course.bgColor}${TRANSPARENCY[ind]}` }}>
                    <h3>{item.title}</h3>
                    <ul className={styles.contentList}>
                        {item.elements.map((item)=><li key={item}>
                            {item}
                        </li>)}
                    </ul>
                </li>
                {ind<2 && <div className={styles.vrline} style={{borderRight: `5px solid ${course.lineColor}`,}}/>}
            </>)}
        </ul>
    </div>
}

export default Course