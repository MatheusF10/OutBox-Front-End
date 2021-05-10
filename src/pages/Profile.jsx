import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../../styles/pages/Profile.module.scss'
import Profile from '../components/Profile'
import * as Icon from 'react-feather'
import api from '../services/api'
import Post from '../components/Post'
import { notificationContext } from '../Context/NotificationContext'
import Modal from '../components/Modal'
export default function ProfilePage() {
    const user = "Matheus"
    const id = 12345
    const [card, setCard] = useState([])
    const { disable, setInput, isModalVisible } = useContext(notificationContext)

    const showCard = async () => {
        const data = await api.get('/api/posts')
        if (data.data.length != 0) {
            const dataArray = data.data
            if (dataArray === 0) {
                return
            } else {
                return (
                    setCard(dataArray.map(data => (<Post key={data._id} title={data.title} text={data.text} id={data._id}></Post>
                    ))))
            }
        }
    }
    useEffect(() => {
        showCard()
    }, card)
    return (
        <>

            <Header></Header>
            <div className={styles.profileContainer}>
                <div className={styles.profile}>
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
                            <button className={styles.markbook}>Markbooks</button>
                            <a href="/Profile">Notes</a>
                        </div>
                    </aside>
                </div>

                <div className={styles.profilePosts}>
                    <textarea className={styles.input} type="text" disabled={disable} placeholder="Write something interesting!" onClick={() => setInput()} />
                    <button className={styles.plusButton}><Icon.Plus></Icon.Plus></button>
                    {isModalVisible && (<Modal></Modal>)}
                    <div className={styles.cardContainer}>

                        {card}

                    </div>
                </div>
            </div>

        </>
    )
}