import { useNavigate,NavLink } from 'react-router-dom'
import style from './AddSubCategory.module.css'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addonsub } from '../../reducer/data.Slice';

const AddSubCategory=()=>{

    const navegate=useNavigate();
const  dispatch=useDispatch()

    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [cat,setCat]=useState('')
    

    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

    const cbtn=()=>{
        setName('');
        setImage('')
    }

    const sbtn=()=>{
        const obj={
            subc:name,
            img:image,
            del:false,
            id:Math.floor( Math.random()*999 ) + 100 ,
cat:cat
        }
        dispatch(addonsub(obj))
        setName('');
        setImage('');
        navegate('/subcategory')
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
          <th><NavLink to='/category'  className={style.list}> Category</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink to='/Subcategory'  className={style.active}>Subcategory</NavLink></th>
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
        <div className={style.sub} >
        <h1 style={{marginBottom:'25px'}}>Add Sub Category</h1>
        <input type='text' value={name} className={style.input} onChange={(e)=>{setName(e.target.value)}} placeholder='Sub category'/>
        <strong style={{marginLeft:'45px'}}>Uplode Image</strong>
        <input  onChange={(e)=>{setImage(e.target.value)}} value={image} style={{marginLeft:'45px'}} type='file'/>
          
        <select  className={style.dropdown} onChange={(e)=>setCat(e.target.value)} id="sum">
        <option value=""></option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="watch">watch</option>
      </select>

    <div  style={{marginLeft:'445px',marginTop:"50px"}}>
    <Button variant="light" onClick={cbtn}>Cancle</Button>
    <Button  style={{marginLeft:'35px'}} variant="secondary" onClick={sbtn}>Save</Button>
    </div>
        </div>
          </div>
          

        </>
    )
}

export default AddSubCategory;