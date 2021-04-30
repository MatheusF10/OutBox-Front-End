import React from 'react'
import Header from '../components/Header'
import styles from '../../styles/pages/Profile.module.scss'
import Profile from '../components/Profile'
import * as Icon from 'react-feather'
export default function ProfilePage(){
    const user = "Matheus"
    const id = 12345
    return(
        <>
        <Header></Header>
        <div className={styles.profileContainer}>
        <aside className={styles.profileContent}>
                <div className={styles.profileCodes}>
                    <Profile size={150}>
                        <h2>#{user}#{id}</h2>
                   </Profile>
                   
                </div>
                <div className={styles.profileConfig}>
                <a href="/Profile">
                    Edit Profile
                </a>
                <div className={styles.circle}><Icon.Settings></Icon.Settings></div>
                </div>
               <div className={styles.buttonContent}>
                   <button>Markbooks</button>
                    <a href="/Profile">Notes</a>
               </div>
        </aside>
            <div className={styles.profilePosts}>
               <textarea></textarea>
               <button><Icon.Plus></Icon.Plus></button>
            </div>
        </div>
        
        </>
    )
}