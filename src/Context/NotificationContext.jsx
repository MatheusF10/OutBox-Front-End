import { createContext, useState } from "react"



export const notificationContext = createContext({})

export default function NotificationProvider({children}){
    
    const [notification, setNotification] = useState(false, 0)
    const [ typeNotification, setTypeNotification] = useState("")
    const [showNotification, setShowNotification] = useState(false)

    

    return(
        <notificationContext.Provider value={{notification, setNotification, typeNotification, setTypeNotification, showNotification, setShowNotification}}>
          {children}
        </notificationContext.Provider>
    )
    
}
