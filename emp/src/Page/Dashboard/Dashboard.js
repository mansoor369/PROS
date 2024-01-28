import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Add from '../Add';
import List from '../list';
import Edit from '../edit';

function Dashboard() {
    const [list,setislist] = useState(false);
    const [Employees, setEmployees] = useState([]);
    const [isadding, setadding] = useState(false);
    const [Isedit, setIsedit] = useState(false);
    const [selectedemp,setselectedemp] = useState('');
    const handleDelete =  async (id) =>{
            axios.delete(`http://localhost:4000/api/delete/${id}`)  
            }

    const handleEdit = (id) =>{
        const [elements] = Employees.filter((employees)=>{
            return employees._id === id;
        })
        console.log(elements)
        setselectedemp(elements);
        console.log(selectedemp);
    }
    
    useEffect(()=>{
        if(Isedit){
            setislist(false);
        }
        else{setislist(true)}
    },[Isedit])

    useEffect(()=>{
        if(isadding){
            setislist(false);
        }
        else{setislist(true)}
    },[isadding])

    

    return (
        <div>
            <h1>Employee Management System</h1>
            {list &&(
                
                <List Employees={Employees}
                setEmployees={setEmployees}
                setisadding={setadding}
                handleDelete = {handleDelete}
                Setisedit = {setIsedit}
                handleEdit ={handleEdit}
            />    
            
            ) }
            
            {isadding && (
                <div>
                    <Add Employees={Employees}
                        setEmployees={setEmployees}
                        setisadding={setadding}
                        
                    />
                    
                </div>
            
            ) }
            {Isedit && (
                <div>
                    <Edit selectedemp = {selectedemp}
                    Employees={Employees} 
                    setEmployees={setEmployees}
                    Setisedit = {setIsedit} />
                    
                </div>
            )}

            

        </div>
    )
}

export default Dashboard