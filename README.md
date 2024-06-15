# SimpleStorage Project

This project demonstrates a basic Ethereum smart contract for storing and retrieving a value. It includes a Hardhat development environment for deploying the contract and a React frontend for interacting with the contract via MetaMask.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) browser extension

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yanntrc/Projet-SimpleStorage.git
cd Projet-SimpleStorage
```

### 2. Install Dependencies

Navigate to the project root and install the necessary dependencies:

```bash
npm install
cd frontend
npm install
```

### 3. Compile the Smart Contract

Use Hardhat to compile the smart contract:

```bash
npx hardhat clean
npx hardhat compile
```

### 4. Deploy the Contract

Start a local Hardhat node:

```bash
npx hardhat node

```
In a new terminal window, deploy the contract to the local Hardhat network:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

```bash
npx hardhat run scripts/deploy.js --network localhost
```
Take note of the deployed contract address from the terminal output.

### 5. Configure MetaMask

1. Open MetaMask and click on the network selector.
2. Select "Add Network" and enter the following details:
   - **Network Name**: Hardhat Localhost
   - **New RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `31337`
   - **Currency Symbol**: ETH
3. Click "Save".

### 6. Import Account to MetaMask

1. Copy one of the private keys from the Hardhat node terminal output.
2. In MetaMask, click on the account icon (top right) and select "Import Account".
3. Paste the private key and click "Import".

### 7. Update React Frontend

Update the contract address in the `frontend/src/App.js` file:

```javascript
const simpleStorageAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```
### Project Structure

```
Projet-SimpleStorage/
├── contracts/
│   └── SimpleStorage.sol
├── frontend/
│   ├── public/
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── index.js
│       └── artifacts/
│           └── contracts/
│               └── SimpleStorage.sol/
│                   └── SimpleStorage.json
├── scripts/
│   └── deploy.js
├── test/
│   └── test.js
├── hardhat.config.js
├── package.json
└── README.md
```

### Interaction with the Smart Contract

#### Set a Value

1. Enter a value in the input field.
2. Click "Set Value".
3. Confirm the transaction in MetaMask.

#### Fetch the Stored Value

1. Click "Fetch Value".
2. The stored value will be displayed on the page.


