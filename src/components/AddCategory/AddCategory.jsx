import { useNavigate,NavLink } from 'react-router-dom'
import style from './AddCategory.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addon, edits } from '../../reducer/data.Slice';


const AddCategory=()=>{

    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [data,setData]=useState([])

    const navegate=useNavigate();

    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

    
const dispatch=useDispatch()

const cbtn=()=>{
    setName('');
    setImage('')
}

const  sbtn=()=>{
const obj={
    cName:name,
    img:image,
    id:Math.floor( Math.random()*999 ) + 100 ,
    del:false
}


dispatch(addon(obj))
setName('');
setImage('');
navegate('/category')
}


    return(
        <>
         <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
<div  className={style.extra} >
  
<table >
      <thead>
        <tr>
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink  className={style.list} to='/home' > Home</NavLink></th> 
        </tr>
      </thead>
      <thead>
        <tr>
          <th><NavLink to='/category'  className={style.active}> Category</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink to='/Subcategory'  className={style.list}>Subcategory</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px'}}><NavLink to='/product'  className={style.list}>Products</NavLink></th>
        </tr>
      </thead>
    </table>
    
    <div className={style.msg}>
        <div  className={style.sub}>
            <h1 style={{marginBottom:'20px'}}>Add Category</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className={style.input}  placeholder='category name'/>
            <strong style={{marginLeft:'60px'}}>Uplode Image</strong>
            <input  value={image} onChange={(e)=>setImage(e.target.value)} style={{marginLeft:'60px'}} type="file" />
            <div className={style.btns}>
            <Button variant="light" onClick={cbtn}>Cancle</Button>
            <Button variant="secondary"  onClick={sbtn}  style={{marginLeft:'60px'}}>Save</Button>
            </div>
            </div>
          </div>
          </div>  

        </>
    )
}

export default AddCategory;