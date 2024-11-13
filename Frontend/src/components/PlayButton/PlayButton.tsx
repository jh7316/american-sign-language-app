import styles from './PlayButton.module.scss'
import { useNavigate } from 'react-router-dom'

interface propType {
    color: string,
    link?: string,
}

const PlayButton: React.FC<propType>  = ({color, link})=>{
    const navigate = useNavigate()

    const handleClick = ()=>{
        if(link) navigate(link)
    }

    return <svg className={styles.main} onClick={handleClick} width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M21.7767 12.6362C22.7945 13.2605 22.7945 14.7395 21.7767 15.3638L2.43663 27.2277C1.37053 27.8817 6.33592e-07 27.1146 6.86493e-07 25.8639L1.69011e-06 2.13611C1.74301e-06 0.885416 1.37053 0.118298 2.43663 0.772278L21.7767 12.6362Z" fill={`rgb(${color})`}/>
    </svg>
    
}

export default PlayButton