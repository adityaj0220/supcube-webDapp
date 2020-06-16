import web3 from '../web3';
import Requests from '../build/Requests.json';

export default (address) => {
    return new web3.eth.Contract(
        Requests.abi,
        address
    );
};
