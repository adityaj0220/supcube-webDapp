import web3 from '../web3';
import Producer from '../build/Producer.json';

export default (address) => {
    return new web3.eth.Contract(
        Producer.abi,
        address
    );
};
