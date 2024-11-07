import styles from './CoursePage.module.scss'
import PlayButton from '../../components/PlayButton/PlayButton'
import { beginner, intermediate, advanced } from '../../assets/course-backgrounds'

interface PropType {
    name: string
    color: string
    courses: CourseList[]
}

const CoursePage: React.FC<PropType> = ({name,color,courses})=>{
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
            Our mission is to make ASL accessible to all through an interactive and inclusive platform. We aim to bridge communication gaps using cutting-edge technology to foster connections and promote language inclusivity. 
            <br /><br />
            Join us in building a world where everyone can 
            communicate—no matter the language.
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
            <p>
                {name==="Beginner" && "Feeling Courageous?"}
                {name==="Intermediate" && "Ready to become an ASL master?"}
                {name==="Advanced" && "Ready to advance your knoledge?"}
            </p>
            <button onClick={handleClick}>{next} &gt;</button>
        </div>
    </div>
    </>
}


export default CoursePage