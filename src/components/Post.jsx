import { useContext } from 'react'
import * as Icon from 'react-feather'
import styles from '../../styles/Components/Post.module.scss'
import api from '../services/api'
import Like from './Like'
import Profile from "./Profile"


export default function Post(props){


    const deletePost =  async (id) => {
        var result = await api.delete(`/api/posts/${id}`) 
        if(result.status === 200){
            window.location.href = "/"
        }
    }
    return(
        <div className={styles.postContainer}>
                    <div className={styles.Delete}>
                        <button onClick={() => deletePost(props.id)}><Icon.X className={styles.Icon}></Icon.X></button>
                    </div>
                    <header>
                        <Profile className={styles.Profile} size="70"></Profile>
                        <div className={styles.lyricContent}><h1>{props.title}</h1></div>
                    </header>
                    <div className={styles.postContent}>
                        <p>{props.text}</p> 
                        <img src="" alt=""/>   
                        <Like id={props.id}></Like>
                    </div>
                    
                </div>
    )
}