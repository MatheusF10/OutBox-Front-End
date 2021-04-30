import * as icon from 'react-feather'
import Profile from '../components/Profile'
import styles from '../../styles/Components/Header.module.scss'
import { useContext, useState } from 'react'
import { notificationContext } from '../Context/NotificationContext'


export default function Header(){

    const {notification, setNotification, typeNotification, showNotification, setShowNotification} = useContext(notificationContext)
    
    const Notification = () => {
       setShowNotification(true)
       setNotification(false)
    }
    
    return(
        <>
        <header className={styles.headerContainer}>
            <h1><a href="/">Out Box</a></h1>
            <div className={styles.itemsContainer}>
                <ul className={styles.itemsContent}>
                <li><a href="/"><icon.Home size="30" ></icon.Home></a></li>
                <li><a href="/Edit"><icon.Edit2 size="30" ></icon.Edit2></a></li>
                <li><a href="/Profile"><Profile className={styles.Profile}><icon.User size={25} color="#702BA6" className={styles.Icon}></icon.User></Profile></a></li>
                { !showNotification ? (<li onClick={() => Notification()}>{notification ? (<a><icon.Bell size="30" onClick={() => setNotification(false)} fill="#702BA6"></icon.Bell><div className={styles.Notification}>{notification}</div></a>) : (<a><icon.Bell size="30"></icon.Bell></a>)}</li>) : 
                (<li onClick={() => setShowNotification(false)} style={{borderBottom:"7.5px solid #702BA6"}}><a><icon.Bell size="30"></icon.Bell></a></li>)}
                 </ul>
                <button>Logout</button>
             </div>
        </header>
        { showNotification  ? (<div className={styles.notificationContainer}>
            <div className={styles.notificationContent}>
                <p>{typeNotification}</p>
            </div>
            <div className={styles.notificationContent}>
                <p>{typeNotification}</p>
            </div>
            <div className={styles.notificationContent}>
                <p>{typeNotification}</p>
            </div>
        </div>) : (null)}
       </>
      
        
    )
}