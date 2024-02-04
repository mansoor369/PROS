import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
function Add( { Employees, setEmployees,setisadding }) {
    const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPnumber] = useState();
  const [Date, setDate] = useState(0);
  

  const handleadd = async (e) => {
    e.preventDefault();

   

  
    const newEmployee = { Name, Email, Phone, Date };
    if(!Name || !Email || !Phone || !Date){
      return Swal.fire({
        icon:'error',
        title:'error!',
        text: "All fields must be Filled !",
        timer:2000,
        showConfirmButton:true
      })
    }

    
    Employees.push(newEmployee);
    setEmployees(Employees);

    console.log(newEmployee);
    console.log("--------------------------------")
  console.log(Employees);
  setisadding(false);
  await axios.post("http://localhost:4000/api/create",newEmployee).then((response)=>{
    console.log(response.data)
  })
  Swal.fire({
    icon:"success",
    title:'success',
    showConfirmButton:false,
    text: ` ${Name} has been added !`,
    timer:2000
  })
  }
  
  return (
    <section>
    <div className='container'>
      
        <div className='row'>
          <div className='col-lg-6'>
          <div className='form-group' onSubmit={handleadd}>
            <label>Name</label>
            <input type='name' className='form-control' value={Name} onChange={(e) => setName(e.target.value)} ></input>

            <label>Email</label>
            <input type='email' className='form-control' value={Email} onChange={(e) => setEmail(e.target.value)} ></input>

            <label>Phone Number</label>
            <input type='number' className='form-control' value={Phone} onChange={(e) => setPnumber(e.target.value)} ></input>

            <label>Date</label>
            <input type='Date' className='form-control' value={Date} onChange={(e) => setDate(e.target.value)} ></input>
            <button onClick={handleadd}  className='btn btn-primary mt-3'>Submit</button>
            <button onClick={()=>setisadding(false)}  className='btn btn-primary mt-3'>Cancel</button>

          </div>
          


          </div>
      </div>


    </div>


  </section>
  )

  
}

export default Add;