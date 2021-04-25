import '../../styles/globals.scss'
import NotificationProvider from '../Context/NotificationContext'



function MyApp({ Component, pageProps }) {

  return( 
    <NotificationProvider>
      <Component {...pageProps} /> 
    </NotificationProvider>
       
    
  )
 
}

export default MyApp
