import { useEffect,useState } from "react";
function GetAPIsTesting(){
const[data,setData]=useState([])
useEffect(()=>
{
    fetch("http://localhost:1919/student/all").then((result)=>{
        result.json().then((response)=>{
            setData(response)
        })
    })
},[])
console.warn(data)

    return(

        <div>
            <h1>Get APIs call</h1>
        </div>
    );
}
export default GetAPIsTesting