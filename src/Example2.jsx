import {useState,createContext,useContext} from 'react'

const UserContext=createContext(null)

const Example2=()=>{
  return <div>
      <Parent/>
  </div>
}

const Parent=()=>{
    const [username, setUsername] = useState("liuyi");

    return (
      <UserContext.Provider value={{username,setUsername}}>
        <h1>父组件</h1>
        你好 {username}
        <Child />
      </UserContext.Provider>
    );
}

const Child = () => {
 const {username,setUsername}=useContext(UserContext)
  return (
    <div>
      <h2>子组件 {username}</h2>
      <GrandChild />
    </div>
  );
};

const GrandChild = () => {
  const {setUsername}=useContext(UserContext)
  return (
    <div>
      <h3>孙组件</h3> 
      <button
        onClick={() => {
          setUsername("xiaobai");
        }}
      >
       修改用户名
      </button>
    </div>
  );
};

export default Example2;