import { useContext } from "react"
import { UserContextProvider,UserContext } from "../UserContext"

const Example3=()=>{
    return <>
    <UserContextProvider>
        <Header/>
        <Content/>
        <Footer/>
    </UserContextProvider>
    </>
}

const Header=()=>{
    const {userInfo,isAuth,login,logout}=useContext(UserContext)
    return <header>
        <h1>{isAuth? <>你好 {userInfo.username} <button onClick={()=>logout()}>登出</button></>:<><button onClick={()=>login()}> 登录</button></>}</h1>
    </header>
}

const Content=()=>{
    const {userInfo}=useContext(UserContext)
    return <div>主体  {userInfo?.username}</div>
}

const Footer=()=>{
    return <footer>页尾</footer>
}

export default Example3