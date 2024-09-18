import { useState } from "react"
function Student()
{
  const[name,setName] =useState("");
  const[roll,setrRoll] =useState("");
  const[address,setAddress] =useState("");
  function saveUser()
  {
    console.warn(name,roll,address);
    let data={name,roll,address}
    fetch("http://localhost:1919/student/",
      {
        mode:'no-cors',
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      }

    ).then((result)=>
    {
      console.warn("result",result);
    }
    )
  }
    return(
       
       <div className="app">
        <h1>Post APIs Examples</h1>
        <input type="text" name="name"value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter name" /><br></br>
        <input type="text" name="roll"value={roll} onChange={(e)=>{setrRoll(e.target.value)}} placeholder="enter roll"/><br></br>
        <input type="text" name="address"value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder="enter address"/><br></br>
        <button type="button" onClick={saveUser}>save new users</button>
       </div>
     
    )
}
export default Student
