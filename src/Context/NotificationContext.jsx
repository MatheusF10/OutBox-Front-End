import { createContext, useState } from "react"
import Like from "../components/Like"
import Post from "../components/Post"
import api from "../services/api"



export const notificationContext = createContext({})

export default function NotificationProvider({children}){
    
    const [notification, setNotification] = useState(false, 0)
    const [typeNotification, setTypeNotification] = useState("")
    const [showNotification, setShowNotification] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [disable, setDisable] = useState(false)
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const [post, setPost] = useState([])

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

  const setModal = () => {
    setIsModalVisible(false)
    setDisable(false)

   
}

const setInput = () => {
    setIsModalVisible(true)
    setDisable(true)
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
                      <Like id={data._id} key={data._id}></Like>
                  </Post>
               )))
          )
      }

      } }

    return(
        <notificationContext.Provider 
        value={{
        notification, 
        setNotification, 
        typeNotification, 
        setTypeNotification, 
        showNotification, 
        setShowNotification, 
        isModalVisible, 
        setIsModalVisible, 
        disable, 
        setDisable,
        createPost,
        setModal,
        title,
        setTitle,
        text, 
        setText, 
        indexPost,
        post,
        setInput
        }}>
          {children}
        </notificationContext.Provider>
    )
    
}
