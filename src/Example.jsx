import { useState } from "react";
const Example = () => {
   return <Parent/>
};

const Parent=()=>{
    const [username, setUsername] = useState("liuyi");

    return (
      <div>
        <h1>父组件</h1>
        你好 {username}
        <Child setUsername={setUsername} />
      </div>
    );
}

const Child = ({ setUsername }) => {
  return (
    <div>
      <h2>子组件</h2>
      <GrandChild setUsername={setUsername} />
    </div>
  );
};

const GrandChild = ({ setUsername }) => {
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

export default Example;
