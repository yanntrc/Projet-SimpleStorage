import { useState } from 'react';
import { ethers, BrowserProvider } from 'ethers';
import SimpleStorage from './artifacts/contracts/SimpleStorage.sol/SimpleStorage.json';

const simpleStorageAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

function App() {
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchValue() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(simpleStorageAddress, SimpleStorage.abi, provider);
      try {
        const data = await contract.getData();
        setStoredValue(data.toString());
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  }

  async function setValueInContract() {
    if (value === '') return;
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(simpleStorageAddress, SimpleStorage.abi, signer);
      try {
        const transaction = await contract.setData(value);
        console.log('Transaction Hash:', transaction.hash);
        await transaction.wait();
        console.log('Transaction confirmed');
        fetchValue();
      } catch (err) {
        console.error("Error: ", err);
      }
    }
  }
  
  

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={e => setValue(e.target.value)}
          placeholder="Set Value"
        />
        <button onClick={setValueInContract}>Set Value</button>
        <button onClick={fetchValue}>Fetch Value</button>
        <h2>Stored Value: {storedValue}</h2>
      </header>
    </div>
  );
}

export default App;
