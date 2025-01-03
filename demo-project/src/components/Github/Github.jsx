
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
const [Data,setData]=useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/Sachin-Rajput31')
.then(response =>response.json)
.then(data=>{
    console.log(data); 
    setData(data)

})
    },[])
  return (
    <div className='text-center m-4 bg-slate-400 text-white p-4 text-3xl'>
    Github followers:{Data.followers} 
      <img src={Data.avatar_url} alt="Git picture" width={300} />
      

    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Sachin-Rajput31')
return response.json()

}
