import React from 'react'
import { ethers } from "ethers";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

const Home = ({state,account,setid}) => {

     const {contract}= state;
     console.log(contract);
     const [datas, setdatas] = useState([]);

     useEffect(() => {
          const getData=async()=>{
               const datas=await contract.showExamples();
               setdatas(datas);
          }
          contract && getData();
     }, [contract,datas])


     const newEntry=async(e)=>{
          e.preventDefault();
          const roll= document.getElementById("roll").value;
          const tx= await contract.addExample(roll);
          await tx.wait();
          console.log("added");
     }

     const changeToInt=(_x)=>{
          const x= ethers.utils.formatEther(_x)*(10**18);
          return x;
     }

  return (
    <div>
     Home
          <form onSubmit={newEntry}>
               <input type="Number" id="roll" placeholder="Roll" />
               <button type="Submit" disabled={!state.contract}>Add</button>
          </form>
     Datas
          {datas.map((data)=>{
               return(
                    <table className="table table-responsive" key={data.id}>
                    <tbody>
                    <tr>
                         <td className="align-middle">{data.stud}</td>
                         <td className="align-middle">{ethers.utils.formatEther(data.roll)*(10**18)}</td>
                         <td className="align-middle">
                              {new Date(data.timeStamp*1000).toLocaleString()}
                         </td>
                         <button className="btn btn-primary" onClick={()=>{setid(changeToInt(data.id))}}>
                         <Link to="/block">
                              View
                         </Link>
                         </button>
                    </tr>
                    </tbody>
                    </table>
               )
          })}
    </div>
  )
}

export default Home
