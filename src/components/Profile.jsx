import styles from '../../styles/Components/Profile.module.scss'
import * as Icon from 'react-feather'

export default function Profile(props){
    const size = props.size
    return(
        <div className={styles.profileCircle} style={{width:`${size}px`, height:`${size}px`}}>
             <img src="https://github.com/MatheusF10.png" alt=""/>
            {props.children}
        </div>
    )
}