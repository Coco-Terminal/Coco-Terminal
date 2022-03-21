/* eslint-disable @typescript-eslint/no-unused-vars */
import { Console } from 'console';
import React ,{useRef, useState,useEffect}from 'react'
import './index.css'
import axios from "axios"
export default function Email() {
  const [result , setresult] = useState<string |number>()
 const [emailvalue,setemailvalue] =useState<string | number>()
  const inputRef = useRef<HTMLInputElement>(null);
 const email = ()=>{
// console.log(inputRef.current?.value) 
setemailvalue(inputRef.current?.value)
 }
 console.log(emailvalue);

  useEffect (()=>{
    axios.post('',{Email:emailvalue}).then(res=>{
      setresult(res.data)
    })
  },[emailvalue])
  return (
    <div className='email'>
      <h1 className='email_h1'>
      Email Address Required
      </h1>
      <div className='email_div'>
          <p>
          We are now requiring project owners to provide contact info. We need a way of contacting you if we have planned downtime, and need some kind of contact info if we have questions about the project.
          </p>
      </div>
      <div className='email_box'>
           <span className='email_title'>  Email</span>
           <input placeholder='　　Email' className='email_input' ref={inputRef}/>
           <button onClick={email}>Save</button>
      </div>
    </div>
  )
}
