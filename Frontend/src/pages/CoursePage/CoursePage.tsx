import styles from './CoursePage.module.scss'
import PlayButton from '../../components/PlayButton/PlayButton'
import { beginner, intermediate, advanced } from '../../assets/course-backgrounds'

interface PropType {
    name: string
    color: string
    courses: CourseList[]
    description: string[]
}

const CoursePage: React.FC<PropType> = ({name,color,courses, description})=>{
    const next = name==="Beginner" ? "Intermediate" : "Advanced"

    const handleClick = ()=>{
        window.location.href = `/courses/${next.toLowerCase()}`
        //navigate(`/courses/${next.toLowerCase()}`)
    }

    return <>
    <div className={styles.main}>
        <img className={styles.background} src={name==="Beginner" ? beginner : (name==="Intermediate" ? intermediate : advanced)} alt='background'/>
        <h2>{name}</h2>
        <p className={styles.description}>
            {description.map((item, ind)=><>
                {item}
                <br /><br />
            </>)}
        </p>
        <ol>
            {courses.map((item)=><li key={item.title}>
                <h3>{item.title}</h3>
                <ul>
                    {item.items.map((item1)=><li key={item1.name}>
                        <p>{item1.name}</p>
                        <PlayButton color={color} link={item1.link}/>
                    </li>)}
                </ul>
            </li>)}
        </ol>
        <div className={styles.next}>
            {name!="Advanced" && <>
                <p>
                    {name==="Beginner" && "Feeling Courageous?"}
                    {name==="Intermediate" && "Ready to become an ASL master?"}
                </p>
                <button onClick={handleClick}>{next} &gt;</button>
            </>}
        </div>
    </div>
    </>
}


export default CoursePage