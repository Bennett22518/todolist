import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'

const Table = () => {

  const [getdata,setGetdata] = useState([])
  const [data,setData] = useState('')
  const [lock,setLock]= useState('')
  const [edit,setEdit]= useState(false)
  

  let token=sessionStorage.getItem('token')
  let email=sessionStorage.getItem('email')
  useEffect(()=>{
    fetchdatas()
  },[])

  let fetchdatas = async ()=>{
    try {
      let tableData = await axios.get(`http://localhost:3100/getdatass/${token}`,{headers:{'Authorization':`Bearer ${token}`}})
    setGetdata(tableData.data.names);
    } catch (error) {
      console.log(error);
    }
  }
  let deletes = async (id)=>{
    try {
      let response = await axios.delete(`http://localhost:3100/newd/${id}`,{headers:{'Authorization':`Bearer ${token}`}})
      fetchdatas();
    } catch (error) {
      console.log(error);
    }
  }
  let updateData = async (id)=>{
    try {
      const responce = await axios.put(`http://localhost:3100/putdata/${id}`,{Task:data},{headers:{'Authorization':`Bearer ${token}`}})
      fetchdatas();
    } catch (error) {
      console.log(error);
    }
  }
  return <>
      {getdata.map((item,key)=>(
        <ul key={key}>
          console.log({key});
        <li>

        {lock == item._id ? (<input
        value={data}
        onChange={(e)=>setData(e.target.value)}/>
        ) : (
        <span>{item.task}</span>
        )}
        {!edit ? ( 
          <button 
          className="btn btn-warning"
          onClick={() => {
            setEdit(true);
            setLock(item._id);
            setData(item.task);
          }}
          >Edit</button>

        ) : (

        <>

        <button 
        class="btn btn-warning" 
        onClick={()=>{updateData(item._id);
        setEdit(false);
        setLock("")}}>Update</button>
        <button 
        class="btn btn-warning" 
        onClick={()=>{
          setEdit(false);
          setLock("");
          }}>Cancel</button>

        </>
        )}
        <button class="btn btn-warning" 
        onClick={()=>deletes(item._id)}
        >
          Delete
          </button>
        </li>
        </ul>
      ))}
  </>
}

export default Table