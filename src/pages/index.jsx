import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../../styles/pages/Home.module.scss'
import Profile from '../components/Profile'
import * as Icon from 'react-feather'
import Post from '../components/Post'
import Like from '../components/Like'
import {notificationContext} from '../Context/NotificationContext'
import api from '../services/api'
import Modal from '../components/Modal'
export default function Home(){

    const {notification, disable, isModalVisible, indexPost, post, setInput} = useContext(notificationContext)
    
    
     
    


    useEffect(() => {
        indexPost()
    }, [], notification)
    return(
        <>
       <Header></Header>
        <div className={styles.contentContainer}>
           <div className={styles.writeContainer}>
               <Profile size="65"></Profile> 
               <input type="text" disabled={disable} placeholder="Write something interesting!" onClick={() => setInput()}/>
              
               { isModalVisible && (<Modal></Modal>)}
            </div>
            </div>
            <div className={styles.feedContainer}>
                {post}
            </div>
        </>
    )
}