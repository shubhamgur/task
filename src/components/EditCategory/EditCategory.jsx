import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from './EditCategory.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addon, edits } from "../../reducer/data.Slice";

const EditCategory=()=>{

    const location=useLocation();
    let ind=location.state.index

    const list=useSelector((state)=>{return state.item.value})

    const [name,setName]=useState(list[ind].cName)
    const [id,setId]=useState(list[ind].id)
    const [image,setImage]=useState()
    const [candition,setCandition]=useState('')

    const navegate=useNavigate()
const dispatch=useDispatch();

const btnClick=()=>{
    alert('Are you sure you want to log out')
    navegate('/')
}

const cbtn=()=>{
    setName('');
    setImage('')
}

const sbtn=()=>{
let con=candition==='false' ?  true :false 
const obj={
    cName:name,
    img:image,
    del:con,
    id:id
}
dispatch(edits(obj))
navegate('/category')
}




    return(
        <>
       <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
<div  >
   
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
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink to='/subcategory'  className={style.list}>Subcategory</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px'}}><NavLink to='/product'  className={style.list}>Products</NavLink></th>
        </tr>
      </thead>
    </table>
    </div>
    <div className={style.msg}>
    <div className={style.sub}>
            <h1>Edit Category</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className={style.input}  placeholder='company name'/>
<strong style={{marginLeft:'60px'}}>Uplode Image</strong>
            <input  value={image} onChange={(e)=>setImage(e.target.value)} style={{marginLeft:'60px'}} type="file" />
            <select  className={style.dropdown}  onChange={(e)=>setCandition(e.target.value)} id="sum">
        <option value='true'>Active</option>
        <option value="false">Inactive</option>
      </select>
            <div className={style.btns}>
            <Button variant="light" onClick={cbtn}>Cancle</Button>
            <Button variant="secondary" onClick={sbtn}  style={{marginLeft:'60px'}}>Save</Button>
            </div>
            </div>
        </div>
    
        </>
    )
}

export default EditCategory;