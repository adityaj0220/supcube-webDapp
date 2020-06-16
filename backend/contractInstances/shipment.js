import web3 from '../web3';
import Shipment from '../build/Shipment.json';

export default (address) => {
    return new web3.eth.Contract(
        Shipment.abi,
        address
    );
};
