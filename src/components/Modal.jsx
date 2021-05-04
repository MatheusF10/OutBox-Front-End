import styles from '../../styles/Components/Modal.module.scss'
import * as Icon from 'react-feather'
import { useContext, useState } from 'react'
import {notificationContext} from '../Context/NotificationContext'

export default function Modal() {
    
    const {setModal, createPost, text, title, setTitle, setText} = useContext(notificationContext)
    return(
        <div className={styles.Overlay}>
                    <div className={styles.modalContainer}>
                        <button onClick={() => setModal()}><Icon.X ></Icon.X></button>
                            <h1>Write What you are thinking!</h1>
                            Title
                            <input className={styles.Input} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                            Write the Text!
                            <textarea type="text" value={text} onChange={e => setText(e.target.value)} />
                        <button onClick={() => createPost()}>Put in the box! <Icon.ArrowRight size="20"></Icon.ArrowRight></button>
                    </div>
                </div>
    )
}