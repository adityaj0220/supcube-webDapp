import web3 from '../web3';
import Provider from '../build/Provider.json';

export default (address) => {
    return new web3.eth.Contract(
        Provider.abi,
        address
    );
};
