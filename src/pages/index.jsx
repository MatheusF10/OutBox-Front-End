import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../../styles/pages/Home.module.scss'
import Profile from '../components/Profile'
import * as Icon from 'react-feather'
import Post from '../components/Post'
import Like from '../components/Like'
import {notificationContext} from '../Context/NotificationContext'
import api from '../services/api'
export default function Home(){

    const {notification} = useContext(notificationContext)

    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [disable, setDisable] = useState(false)
    const [post, setPost] = useState([])
    const [like, setLike] = useState([])
    

    
    const createPost = async () => {
        const data = { title, text}
        await api.post('api/posts', data)
        if(text, title === ""){
            alert('You need write something to complete your text!')
            api.status(500).json()
        }
        setText("")
        setTitle("")
        setIsModalVisible(false)
        setDisable(false)
        indexPost()
    }

   const indexPost = async () => {
        const data = await api.get('/api/posts')
        if(data.data.length !=0){
            const dataArray = data.data
            if(dataArray.length === 0) {
                return
            }else{
                return(
                    setPost(dataArray.map( data => (
                        <Post key={data._id} id={data._id} title={data.title} text={data.text}>
                        </Post>
                     )))
                )
            }

            } }
        
    const setInput = () => {
        setIsModalVisible(true)
        setDisable(true)
    }

    const setModal = () => {
        setIsModalVisible(false)
        setDisable(false)

       
    }

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
              
               { isModalVisible ? (
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
                </div>) : (null)}
            </div>
            </div>
            <div className={styles.feedContainer}>
                {post}
                {like}
            </div>
        </>
    )
}