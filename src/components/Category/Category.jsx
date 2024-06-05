import { useNavigate,NavLink } from 'react-router-dom'
import style from './Category.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { deletes } from '../../reducer/data.Slice';

const Category=()=>{

const navegate=useNavigate();
const dispatch=useDispatch()

const list=useSelector((state)=>{return state.item.value})



    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

const addBtn=()=>{
    navegate('/addcategory')
}

const dbtn=(ind)=>{
    dispatch(deletes(+ind))  
}

const ebtn=(ind)=>{
  navegate('/editcat',{state:{index:ind}})
}

const allData=list.map((ele,ind)=>
    <tbody key={ind}>
        <tr>
          <td>{ele.id}</td>
          <td>{ele.cName}</td>
          <td>{ele.img}</td>
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
          <Button style={{padding:'0px'}} variant="danger" onClick={()=>{dbtn(ind)}}>Delete</Button></td>
        </tr>
</tbody>)

    return(
        <>
        <h1 className={style.heading}>digital<span className={style.frontname}>flake </span>
<button className={style.logout} onClick={btnClick}  >Logout</button></h1>
<div  >
   
        <div className={style.one}>
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
    </div>
    </div>
    <div className={style.msg}>
        <div  className={style.sub}>
        <h1 className={style.input}>Categary<input  className={style.input} type='text'/>  
        <Button style={{marginLeft:"280px"}} onClick={addBtn} variant="primary">Add New</Button></h1>
        <div  style={{marginTop:"25px"}} >
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Categary name</th>
          <th>image</th>
          <th>status</th>
          <th>action</th>
        </tr>
      </thead>
      {allData}
    </Table>
        </div>
        </div>


          </div>
          

        </>
    )
}

export default Category;