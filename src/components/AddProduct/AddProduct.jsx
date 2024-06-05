import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import style from './AddProduct.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { proaddon } from "../../reducer/data.Slice";

const AddProduct=()=>{

    const [cat,setCat]=useState('')
    const [name,setName]=useState('')
    const [subcat,setSubcat]=useState('')

    const navegate=useNavigate()
    const dispatch=useDispatch()

const btnClick=()=>{
    alert('Are you sure you want to log out')
    navegate('/')
}

const cbtn=()=>{
setCat('');
setName('')
}

const sbtn=()=>{
    const obj={
        product:name,
        subc:subcat,
        del:false,
        id:Math.floor( Math.random()*999 ) + 100 ,
cat:cat
    }
    dispatch(proaddon(obj))
    navegate('/product')
}


    return(
        <>
        <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
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
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink to='/subcategory'  className={style.list}>Subcategory</NavLink></th>
        </tr>
      </thead>
      <thead >
        <tr>
          <th style={{paddingBottom:'25px'}}><NavLink to='/product'  className={style.active}>Products</NavLink></th>
        </tr>
      </thead>
    </table>
    </div>
    <div  className={style.sub}>
    <h1 style={{marginBottom:'20px'}}>Add Product</h1>
    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} className={style.input}  placeholder='Product name'/>

    <strong style={{marginLeft:"90px"}}>Category</strong>
    <select  className={style.dropdown}  onChange={(e)=>setCat(e.target.value)} id="sum">
        <option value=""></option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="watch">watch</option>
      </select>

      <strong style={{marginLeft:"90px"}}>sub Category</strong>

      { cat==='Mobile' && 
        <>
        <select  className={style.dropdown} onChange={(e)=>setSubcat(e.target.value)}  id="mobile">
        <option value=""></option>
        <option value="Mi">Mi</option>
        <option value="iphone">iphone</option>
      </select>
        </>
      }

{ cat==='Laptop' && 
        <>
        <select  className={style.dropdown} onChange={(e)=>setSubcat(e.target.value)}  id="laptop">
        <option value=""></option>
        <option value="Dell">Dell</option>
        <option value="Asus">Asus</option>
      </select>
        </>
      }

{ cat==='watch' && 
        <>
        <select  className={style.dropdown} onChange={(e)=>setSubcat(e.target.value)}  id="watch">
        <option value=""></option>
        <option value="Titan">Titan</option>
        <option value="Fastrack">Fastrack</option>
      </select>
        </>
      }

<div  style={{marginLeft:'400px',marginTop:"100px"}}>
    <Button variant="light" onClick={cbtn}>Cancle</Button>
    <Button  style={{marginLeft:'35px'}} variant="secondary" onClick={sbtn}>Save</Button>
    </div>

    </div>
        </>
    )
}

export default AddProduct;