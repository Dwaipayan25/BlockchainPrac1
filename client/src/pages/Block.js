// import React from 'react'
// import { ethers } from "ethers";
// import { useState,useEffect } from "react";

// const Block = (state,account,id) => {
//      console.log(state,id);
//      const {contract}= state;
//      console.log(contract);
//      const [data, setdata] = useState([]);
//      useEffect(() => {
//           const getData=async()=>{
//                const data=await contract.examples(id);
//                data.wait();
//                console.log("data");
//                setdata(data);
//           }
//           contract && getData();
//      }, [contract])
//   return (
//     <div>
//       {data.roll}
//     </div>
//   )
// }

// export default Block


import React from 'react'
import { ethers } from "ethers";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

const Home = ({state,account,id}) => {

     const {contract}= state;
     console.log(id);
     console.log(contract);
     const [data, setdata] = useState([]);
     const [roll, setroll] = useState(null);
     const [address, setaddress] = useState(null);
     const [time, settime] = useState(null)

     useEffect(() => {
          // e.preventDefault();
          const getData=async()=>{
               const data=await contract.examples(id);
               setdata(data);
               setroll(changeToInt(data.roll));
               setaddress(data.stud);
               settime(changeToInt(data.timeStamp));
          }
          contract && getData();
     }, [contract, id])

     const changeToInt=(_x)=>{
          const x= ethers.utils.formatEther(_x)*(10**18);
          return x;
     }


  return (
    <div>
     block <br/>
     <ul>
          <li>{id}</li>
          <li>{address}</li>
          <li>{roll}</li>
          <li>{new Date(time*1000).toLocaleString()}</li>
     </ul>
     <button><Link to="/">
          Back to Home
     </Link>
     </button>
    </div>
  )
}

export default Home


/*
{data.map(()=>{
          return(
               <ul>
                    <li>{changeToInt(id)}</li>
                    <li>{data.stud}</li>
                    <li>{changeToInt(data.roll)}</li>
                    <li>{new Date(data.timeStamp*1000).toLocaleString()}</li>
               </ul>
          )
     })}
*/