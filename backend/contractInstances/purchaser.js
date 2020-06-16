import web3 from '../web3';
import Purchaser from '../build/Purchaser.json';

export default (address) => {
    return new web3.eth.Contract(
        Purchaser.abi,
        address
    );
};
