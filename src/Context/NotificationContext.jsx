import { createContext, useState } from "react"



export const notificationContext = createContext({})

export default function NotificationProvider({children}){
    
    const [notification, setNotification] = useState(false, 0)

    

    return(
        <notificationContext.Provider value={{notification, setNotification}}>
          {children}
        </notificationContext.Provider>
    )
    
}
