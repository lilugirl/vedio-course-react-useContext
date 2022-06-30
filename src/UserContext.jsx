import { createContext,useState } from "react"
export const UserContext=createContext(null)

export const UserContextProvider=({children})=>{
    const [userInfo,setUserInfo]=useState(null)
    const [isAuth,setIsAuth]=useState(false)

    const login=()=>{
        setTimeout(()=>{
           setUserInfo({username:'alex',status:true})
           setIsAuth(true)
        },2000)
       
    }

    const logout=()=>{
        setTimeout(()=>{
            setUserInfo(null)
            setIsAuth(false)
        },2000)

    }

   return <UserContext.Provider value={{userInfo,isAuth,login,logout}}>
       {children}
   </UserContext.Provider>
}