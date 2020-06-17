import web3 from '../web3';
import User from '../build/User.json';

const instance = new web3.eth.Contract(
    User.abi,
    'Deployed Address'
);
export default instance;
