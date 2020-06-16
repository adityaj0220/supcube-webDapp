const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('./build/User.json');

const provider = new HDWalletProvider(
  'hen run basket employ smoke unaware bottom slide breeze armed lake cart',
  'https://rinkeby.infura.io/v3/5c442a0b72e44cc189143b4e35c16546'
);

const web3 = new Web3(provider);

(async () => {
	const accounts = await web3.eth.getAccounts();

	console.log(`Attempting to deploy from account: ${accounts[0]}`);

	const deployedContract = await new web3.eth.Contract(compiledContract.abi)
		.deploy({
			data: '0x' + compiledContract.evm.bytecode.object
		})
		.send({
			from: accounts[0],
			gas: '9000000'
		});

	console.log(
		`Contract deployed at address: ${deployedContract.options.address}`
	);

	provider.engine.stop();
})();
