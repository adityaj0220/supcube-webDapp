import web3 from '../web3';
import User from '../build/User.json';

const instance = new web3.eth.Contract(
    User.abi,
    '0x89961c14320A6b80899241514781eC0B27041D68'
);
export default instance;
