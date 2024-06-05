import { useNavigate,NavLink } from 'react-router-dom'
import style from './SubCategory.module.css'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { subdeletes } from '../../reducer/data.Slice';

const SubCategory=()=>{

    const navegate=useNavigate();
    const dispatch=useDispatch()

    const btnClick=()=>{
        alert('Are you sure you want to log out')
        navegate('/')
    }

const ebtn=(ind)=>{
  navegate('/esub',{state:{index:ind}})
}

    const list=useSelector((state)=>{return state.item.arr});

    const dbtn=(ind)=>{
        dispatch(subdeletes(+ind))
    }
    
    const allData=list.map((ele,ind)=>
    <tbody key={ind}>
        <tr>
          <td>{ele.id}</td>
          <td>{ele.subc}</td>
          <td>{ele.cat}</td>
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
          <td><Button style={{padding:'0px'}} variant="success"  onClick={()=>{ebtn(ind)}}>Edit</Button>
          <Button style={{padding:'0px'}} variant="danger"  onClick={()=>{dbtn(ind)}}>Delete</Button></td>
        </tr>
</tbody>)


    const bclick=()=>{
        navegate('/addsubcategory')
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
        <div className={style.sub}>
        <h1 className={style.input}>Sub Categary<input  className={style.input} type='text'/>  
        <Button style={{marginLeft:"280px"}} variant="primary" onClick={bclick}>Add New</Button></h1>
        <div  style={{marginTop:"25px",marginLeft:'130px'}} >
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Sub Categary name</th>
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

export default SubCategory;