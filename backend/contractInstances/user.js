import web3 from '../web3';
import User from '../build/User.json';

const instance = new web3.eth.Contract(
    User.abi,
    '0xdCadb4E7783b297b1a0A3cD7c01C126808aD4c7e'
);
export default instance;
