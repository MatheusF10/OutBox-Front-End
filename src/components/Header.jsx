import * as icon from 'react-feather'
import Profile from '../components/Profile'
import styles from '../../styles/Components/Header.module.scss'
import { useContext } from 'react'
import { notificationContext } from '../Context/NotificationContext'

export default function Header(){
    const context = useContext(notificationContext)
    const {notification, setNotification} = context
    return(
        <header className={styles.headerContainer}>
            <h1><a href="/">Out Box</a></h1>
            <div className={styles.itemsContainer}>
                <ul className={styles.itemsContent}>
                <li><a href="#"><icon.Home size="30" ></icon.Home></a></li>
                <li><a href="#"><icon.Edit2 size="30" ></icon.Edit2></a></li>
                <li><a href="#"><Profile className={styles.Profile}><icon.User size={25} color="#702BA6" className={styles.Icon}></icon.User></Profile></a></li>
                { notification ? (<li  onClick={() => setNotification(false)}><a><icon.Bell size="30"></icon.Bell><div className={styles.Notification}>{notification}</div></a></li> ) : 
                ( <li><icon.Bell size="30"></icon.Bell></li> )}
                
                 </ul>
                <button>Logout</button>
             </div>
            
        </header>

    )
}