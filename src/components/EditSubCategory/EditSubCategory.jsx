import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from './EditSubCategory.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { subedit } from "../../reducer/data.Slice";

const EditSubCategory=()=>{

  const list=useSelector((state)=>{return state.item.arr})
  const location=useLocation();
  let ind=location.state.index


  const [name,setName]=useState(list[ind].subc)
  const [id,setId]=useState(list[ind].id)
  const [image,setImage]=useState()
  const [candition,setCandition]=useState('')
  const [cat,setCat]=useState('')

//console.log(ind)

const navegate=useNavigate()
const dispatch=useDispatch()

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
    subc:name,
    img:image,
    del:con,
    id:id,
cat:cat
  }
  dispatch(subedit(obj))
  navegate('/subcategory')
  }
  

    return(
        <>
        <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
<div  >
    <div   >
<table >
      <thead>
        <tr>
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink  className={style.list} to='/home' > Home</NavLink></th> 
        </tr>
      </thead>
      <thead>
        <tr>
          <th><NavLink to='/category'  className={style.list}> Category</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink to='/subcategory'  className={style.active}>Subcategory</NavLink></th>
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
            <h1> Edit Sub Category</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className={style.input}  placeholder='sub category'/>
<strong style={{marginLeft:'60px'}}>Uplode Image</strong>
            <input  value={image} onChange={(e)=>setImage(e.target.value)} style={{marginLeft:'60px'}} type="file" />
            <select  className={style.dropdown}  onChange={(e)=>setCandition(e.target.value)} id="sum">
        <option value='true'>Active</option>
        <option value="false">Inactive</option>
      </select>
      <div>
      <strong>Category</strong>
      <select style={{marginTop:"30px"}} onChange={(e)=>setCat(e.target.value)} className={style.dropdown} id="sum">
      <option value=""></option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="watch">watch</option>
      </select>
      </div>
            <div className={style.btns}>
            <Button variant="light" onClick={cbtn}>Cancle</Button>
            <Button variant="secondary" style={{marginLeft:'60px'}} onClick={sbtn}>Save</Button>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default EditSubCategory;