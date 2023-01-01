import abi from './contracts/blc.json';
import {useState,useEffect} from 'react';
import {ethers} from 'ethers'; 
import Home from './pages/Home';
import Block from './pages/Block';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [state,setState] = useState({
    provider:null,
    signer:null,
    contract:null,
  })

  const [id,setId]=useState(0);

  const [account,setAccount] = useState('None');
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress = "0x0D4B291E519Db3a65a1351886E106E126bFEdc25";
      const contractABI=abi.abi;
      try{
        const {ethereum}=window;
        if(ethereum){
          const accounts=await ethereum.request({method:"eth_requestAccounts"});

          window.ethereum.on("chainChanged",()=>{
            window.location.reload();
          })

          window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
          })
        
          const provider=new ethers.providers.Web3Provider(window.ethereum);
          const signer=provider.getSigner();
          const contract=new ethers.Contract(contractAddress,contractABI,signer);
          console.log(accounts[0]);
          setAccount(accounts[0]);
          setState({provider,signer,contract});
        }else{
          alert("please install metamask")
        }
      }
      catch{
        console.log("error");
      }
    };
    connectWallet();
  },[])
  console.log(state);

  function setIdfunc(_id){
    setId(_id);
  }

  return (
    <div>
      Connected Account: {account}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home state={state} account={account} setid={setIdfunc}/>} />
        <Route path="/block" element={<Block state={state} account={account} id={id}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
