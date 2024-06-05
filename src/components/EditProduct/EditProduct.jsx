import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from './EditProduct.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { editpro } from "../../reducer/data.Slice";

const EditProduct=()=>{

    const list=useSelector((state)=>{return state.item.pro})
    const location=useLocation();
    let ind=location.state.index

    const [subcat,setSubcat]=useState('')
    const [name,setName]=useState(list[ind].product)
    const [cat,setCat]=useState('')
    const [candition,setCandition]=useState('')
    const [id,setId]=useState(list[ind].id)

    const dispatch=useDispatch()

    const navegate=useNavigate()

    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

    const cbtn=()=>{
        setName('');
    }
    
    const sbtn=()=>{
        let con=candition==='false' ?  true :false 
        const obj={
            product:name,
        subc:subcat,
        del:con,
        id:id,
cat:cat
        }
        console.log(obj)
        dispatch(editpro(obj))
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
    <div className={style.msg}>
    <div className={style.sub}>
            <h1>Edit Product</h1>

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

<div style={{marginTop:'50px'}}>
<strong>Status</strong>
<select  className={style.dropdown}  onChange={(e)=>setCandition(e.target.value)} id="sum">
        <option value='true'>Active</option>
        <option value="false">Inactive</option>
      </select>
</div>
<div className={style.btns}>
            <Button variant="light" onClick={cbtn}>Cancle</Button>
            <Button variant="secondary" onClick={sbtn}  style={{marginLeft:'60px'}}>Save</Button>
            </div>
            </div>
            </div>
        </>
    )
}

export default EditProduct;