import React, { useEffect } from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
function Edit({selectedemp,Employees,setEmployees,Setisedit}) {

  const [Name, setName] = useState(selectedemp.Name);
  const [Email, setEmail] = useState(selectedemp.Email);
  const [Phone, setPnumber] = useState(selectedemp.Phone);
  const [Date, setDate] = useState(selectedemp.Date);

  const handleUpdate =  async (e) => {
    e.preventDefault();

    const id = selectedemp._id;
    const newEmployee = {Name, Email, Phone, Date};

    await axios.put(`http://localhost:4000/api/update/${id}`,newEmployee)
    

    
    

    if(!Name || !Email || !Phone || !Date){
      return Swal.fire({
        icon:'error',
        title:'error!',
        text: "All fields must be Filled !",
        timer:2000,
        showConfirmButton:true
      })
    }

    console.log(id)
    const updatedEmp = Employees.map((employee)=>{
      if(employee.id === selectedemp.id){
        return newEmployee;
      }
     return  employee;
    })
    setEmployees(updatedEmp);
    Setisedit(false);
  console.log(updatedEmp)




  Swal.fire({
    icon:"success",
    title:'success',
    showConfirmButton:false,
    text: ` ${Name} has been Updated !`,
    timer:2000
  })
  }

  return (
    <section>
    <div className='container'>
      
        <div className='row'>
          <div className='col-lg-6'>
          <div className='form-group'>
            <label>Name</label>
            <input type='name' className='form-control' value={Name} onChange={(e) => setName(e.target.value)} ></input>

            <label>Email</label>
            <input type='Email' className='form-control' value={Email} onChange={(e) => setEmail(e.target.value)} ></input>

            <label>Phone Number</label>
            <input type='number' className='form-control' value={Phone} onChange={(e) => setPnumber(e.target.value)} ></input>

            <label>Date</label>
            <input type='Date' className='form-control' value={Date} onChange={(e) => setDate(e.target.value)} ></input>
            <button onClick={handleUpdate}  className='btn btn-primary mt-3'>update</button>
            <button onClick={()=>Setisedit(false)}  className='btn btn-primary mt-3'>Cancel</button>

          </div>
          


          </div>
      </div>


    </div>


  </section>
  )
}

export default Edit