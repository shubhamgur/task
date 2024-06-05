import style from './Home.module.css'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home=()=>{

    const navegate=useNavigate()

const btnClick=()=>{
    alert('Are you sure you want to log out')
    navegate('/')
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
          <th style={{paddingBottom:'25px',paddingTop:'25px'}}><NavLink  className={style.active} to='/home' > Home</NavLink></th> 
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
          <th style={{paddingBottom:'25px'}}><NavLink to='/product'  className={style.list}>Products</NavLink></th>
        </tr>
      </thead>
    </table>
    </div>
    <div className={style.msg}>
        <div  className={style.homemsg}>
          <h1>digital<span className={style.frontname}>flake </span></h1>
          <h3>Welcome to Digitalflake admin</h3>
          </div>
          </div>
          
</div>

        </>
    )
}

export default Home;