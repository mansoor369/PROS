import React, { useEffect } from 'react'
import axios from 'axios'

function  List({ Employees, setisadding, handleDelete,Setisedit,handleEdit,setEmployees }) {
useEffect(()=>{
  axios.get(`http://localhost:4000/api/get`)
  .then((response)=>{setEmployees(response.data)
    
    }) 
    
    .catch((error)=>console.log(error))
})

  return (
    <div>

      <button onClick={() => setisadding(true)} className='btn btn-primary mt-3 mx-3'>Add Employee</button> <br></br>


      {Employees.length > 0 ? Employees.map((employee) => {
          
            return (
              <div key={employee._id}>
                <section className='container'>
                  <div className='row'>
                    <div  className='col-lg-6'>
                      {employee.id}  {employee.Name} {employee.Email} {employee.Phone} {employee.Date} 
                      {<button className='btn btn-danger' onClick={() => handleDelete(employee._id)}>Delete</button>} 
                      {<button className='btn btn-secondary mx-2' onClick={function Call(){
                        handleEdit(employee._id)
                        Setisedit(true);
                      }}>Edit</button>}
          
                    </div>
                  </div>
          
          
                </section>
          
              </div>
            )
          }) : "no Employees"}


    </div>
  )

}

export default List









// Employees.map((employee) => {
          
//   return (
//     <div key={employee.id}>
//       <section className='container'>
//         <div className='row'>
//           <div  className='col-lg-6'>
//             {employee.id}  {employee.Name} {employee.Email} {employee.Phone} {employee.Date} 
//             {<button className='btn btn-danger' onClick={() => handleDelete(employee.id)}>Delete</button>} 
//             {<button className='btn btn-secondary mx-2' onClick={function Call(){
//               handleEdit(employee.id)
//               Setisedit(true);
//             }}>Edit</button>}

//           </div>
//         </div>


//       </section>

//     </div>
//   )
// })