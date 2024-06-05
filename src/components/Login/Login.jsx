import style from './Login.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList=()=>{

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [msg,setMsg]=useState('');
    const [passmsg,setPassmsg]=useState('');

    const navigate=useNavigate()

const btnClick=()=>{
    if(!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        setMsg('Incorrect Email Id')
        setTimeout(()=>{
            setMsg('')
        },4000)
        return;
      }
      if(pass.length<8){
        setPassmsg('password should be minimum 8 digit')
        setTimeout(()=>{
            setPassmsg('')
        },4000)
        return;
      }

      navigate('/home')
}

    return(
        <div className={style.main}>
            <div className={style.sub}>
       <h1>digital<span  className={style.frontname}>flake </span></h1>

       <h3>Welcome to Digitalfake admin</h3>
       <div>
        <input placeholder='Email' onChange={(n)=>{setEmail(n.target.value)}} className={style.input} type='text'/>
        <p className={style.msg}>{msg}</p>
       </div>
       <div>
        <input placeholder='Password'  onChange={(n)=>{setPass(n.target.value)}} className={style.input} type='password'/>
        <p className={style.msg}>{passmsg}</p>
       </div>
<div>
       <Button onClick={btnClick} className={style.btn} variant="primary">Log in</Button>
       </div>
       </div>
        </div>
    )
}

export default TodoList;