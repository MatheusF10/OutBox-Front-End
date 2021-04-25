import styles from '../../styles/Components/Like.module.scss'
import { useContext, useState } from "react"
import { notificationContext } from "../Context/NotificationContext"
import * as Icon from 'react-feather'

export default function Like(props) {
    const context = useContext(notificationContext)
    const {notification, setNotification} = context
    localStorage.getItem(isLike, isLoved, isUnlike)
    const [isLike, setIsLike] = useState(false, 0, [])
    const [isLoved, setIsLoved] = useState(false, 0, [])
    const [isUnlike, setIsUnlike] = useState(false, 0, [])

    const Like = () => {
        setIsLike(true)
        setIsLoved(false)
        setIsUnlike(false)
        if(notification === 0){
            setNotification(notification + 1, false)
        }else{
            setTimeout(() => setNotification(notification + 1 , false), 3000)
        }
        
        
    }

    const Loved = () => {
        setIsLoved(true)
        setIsLike(false)
        setIsUnlike(false)
        if(notification === 0){
            setNotification(notification + 1, false)
        }else{
            setTimeout(() => setNotification(notification + 1 , false), 3000)
        }
    }

    const Unlike = () => {
        setIsUnlike(true)
        setIsLoved(false)
        setIsLike(false)
        if(notification === 0){
            setNotification(notification + 1, false)
        }else{
            setTimeout(() => setNotification(notification + 1 , false), 3000)
        }
    }



    return(
                <div className={styles.likeContainer} id={props.id}>
                            {isLike ? (
                            
                            <div className={styles.likeContent} onClick={() => setIsLike(false)} style={{background: "#c4c4c4", borderRadius:"5px"}}><Icon.ThumbsUp className={styles.Icon} fill="#5CB0BB" ></Icon.ThumbsUp></div>) : 
                            (<div className={styles.likeContent} onClick={() => Like() }><Icon.ThumbsUp className={styles.Icon} ></Icon.ThumbsUp></div>)}
                            {isLoved ? 
                            (<div className={styles.likeContent} onClick={() => setIsLoved(false)} style={{background: "#c4c4c4", borderRadius:"5px"}}><Icon.Heart className={styles.Icon}   fill="red" ></Icon.Heart> </div>) : 
                            (<div className={styles.likeContent} onClick={() => Loved() }><Icon.Heart className={styles.Icon}  ></Icon.Heart></div>)}
                            {isUnlike ? (
                            <div className={styles.likeContent} onClick={() => setIsUnlike(false)} style={{background: "#c4c4c4", borderRadius:"5px"}}><Icon.ThumbsDown className={styles.Icon}  fill="#702BA6"  ></Icon.ThumbsDown> </div>) : 
                            (<div className={styles.likeContent} onClick={() => Unlike()}><Icon.ThumbsDown className={styles.Icon}  ></Icon.ThumbsDown></div>
                            )}
                     </div>                
    )
};
