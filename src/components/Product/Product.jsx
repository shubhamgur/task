import { NavLink, useNavigate } from 'react-router-dom'
import style from './Product.module.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deletespro } from '../../reducer/data.Slice';

const Product=()=>{

    const navegate=useNavigate()

    const dispatch=useDispatch()

    const list=useSelector((state)=>{return state.item.pro})
    console.log(list)

    const dbtn=(ind)=>{
      dispatch(deletespro(+ind))  
  }

  const ebtn=(ind)=>{
    navegate('/editpro',{state:{index:ind}})
  }
  

    const allData=list.map((ele,ind)=>
    <tbody key={ind}>
        <tr>
          <td>{ele.id}</td>
          <td>{ele.product}</td>
          <td></td>
          <td>{ele.subc}</td>
          <td>{ele.cat}</td>
          <td>
            {ele.del && (
                <>
                <td style={{color:'red'}}>Inactive</td>
                </>
            )}
            {!ele.del && (
                <>
                <td  style={{color:'green'}}>Active</td>
                </>
            )}
          </td>
          <td><Button style={{padding:'0px'}} variant="success" onClick={()=>{ebtn(ind)}}>Edit</Button>
          <Button style={{padding:'0px'}} variant="danger"  onClick={()=>{dbtn(ind)}}>Delete</Button></td>
        </tr>
</tbody>)


    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

const bclick=()=>{
  navegate('/addpro')
}

    return(
        <>
    <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
<div>
  
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
      <div  className={style.sub}>
    <h1 style={{marginLeft:"130px"}}>Product<input  className={style.input} type='text'/>  
        <Button style={{marginLeft:"280px"}} onClick={bclick} variant="primary">Add New</Button></h1>
        <Table  style={{marginLeft:"130px"}} striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Product name</th>
          <th>image</th>
          <th>Sub Category</th>
          <th>Category</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      { allData}
    </Table>
        </div>
        </div>
        </>
    )
}

export default Product;