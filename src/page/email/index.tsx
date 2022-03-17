/* eslint-disable @typescript-eslint/no-unused-vars */
import { Console } from 'console';
import React ,{useRef, useState}from 'react'
import './index.css'
export default function Email() {
 
  const inputRef = useRef<HTMLInputElement>(null);
 const email = ()=>{
console.log(inputRef.current?.value) 
 }
  
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
