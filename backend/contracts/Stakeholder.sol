pragma solidity 0.6.8;
import './Requests.sol';
import './Shipment.sol';

contract User
{
    mapping(address => address) public val;
    mapping(address => bool) public checkArray;
    mapping(address => uint) public index;
    uint i=0;

    struct SignDet{
        string profile;
        string password;
    }

    SignDet[] public sdet;

    function userSignup(string memory pr,string memory pass) public {
        require(!checkArray[msg.sender]);
        checkArray[msg.sender] = true;
        index[msg.sender] = i;
        i++;
        SignDet memory j = SignDet({
            profile: pr,
            password: pass
        });
        sdet.push(j);

        if(keccak256(abi.encodePacked(pr)) == keccak256(abi.encodePacked("Producer")))
        {
            Producer newProducer = new Producer(msg.sender);
            val[msg.sender] = address(newProducer);
        }
        else if(keccak256(abi.encodePacked(pr)) == keccak256(abi.encodePacked("Purchaser")))
        {
            Purchaser newPurch = new Purchaser(msg.sender);
            val[msg.sender] = address(newPurch);
        }
        else
        {
            Provider newProvider = new Provider(msg.sender);
            val[msg.sender] = address(newProvider);
        }
    }
    function userLogin(string memory pass,address jk) public view returns(string memory,string memory)
    {
        //require(checkArray[msg.sender]);
        //require(keccak256(abi.encodePacked(sdet[index[msg.sender]].password)) == keccak256(abi.encodePacked(pass)));
        return ("True",sdet[index[jk]].profile);
       }
}

contract Producer
{
    Shipment[] public deployedShipment;
    address public prod;
    address[] public reqarr;
    constructor(address ll) public
    {
        prod = ll;
    }

    /* modifier restricted()
    {
        require(msg.sender == prod);
        _;
    } */

    function createShipments(string memory description,uint amount) public
    {
       Shipment newShipment =  new Shipment();
       newShipment.Ship(description,amount,msg.sender);
       deployedShipment.push(newShipment);
    }
    function getShipments() public view returns(Shipment[] memory)
    {
        return deployedShipment;
    }
    function addReq(address req,address rec) public
    {
        require(prod == rec);
        reqarr.push(req);
    }
    function getrequests(address req) public view returns(string memory,string memory,address,address,address)
    {
        //require(reqMap[purchaser] == req);
        Requests newReq = Requests(req);
        return newReq.getReq();
    }
    function getR() public view returns(address[] memory)
     {
         return reqarr;
     }

}

contract Purchaser {

    address[] public recievedShip;
    address purchaser;
    address[] public reqarr;
    Requests[] public createdReq;
    constructor(address ll) public
    {
        purchaser = ll;
    }

  function getAdd(address cc,address bb) public
    {
        require(purchaser == bb);
        recievedShip.push(cc);
        //check[bb] = cc;
    }
    function getVal(address aa) public view returns(string memory,uint,string memory)
    {
        //require(check[purchaser] == aa);
        Shipment newShip = Shipment(aa);
        return newShip.getUser();
    }
    function retAdd() public view returns(address[] memory)
    {
        return recievedShip;
    }
    function createRequests(string memory des,string memory q,address prod) public
    {
        Requests newReq = new Requests();
         newReq.Reqnew(des,q,prod,msg.sender);
        createdReq.push(newReq);
    }
    function getReq() public view returns(Requests[] memory)
    {
      return createdReq;
    }
    function addReq(address req,address rec) public
    {
        require(purchaser == rec);
        reqarr.push(req);
    }
    function getrequests(address req) public view returns(string memory,string memory,address,address,address)
    {
        //require(reqMap[purchaser] == req);
        Requests newReq = Requests(req);
        return newReq.getReq();
    }
    function getR() public view returns(address[] memory)
     {
         return reqarr;
     }
}


contract Provider {

    address[] public recievedShip;
    address provider;
    Requests[] public createdReq;

    constructor(address ll) public
    {
        provider = ll;
    }

   function getAdd(address cc,address bb) public
    {
        require(provider == bb);
        recievedShip.push(cc);
    }
    function getVal(address aa) public view returns(string memory,uint,string memory)
    {
        //require(check[provider] == aa);
        Shipment newShip = Shipment(aa);
        return newShip.getUser();
    }
     function createRequests(string memory des,string memory q,address purch) public
    {
        Requests newReq = new Requests();
        newReq.Reqnew(des,q,purch,msg.sender);
        createdReq.push(newReq);
    }
    function retAdd() public view returns(address[] memory)
    {
        return recievedShip;
    }
    function getrequests(address req) public view returns(string memory,string memory,address,address,address)
    {
        //require(reqMap[purchaser] == req);
        Requests newReq = Requests(req);
        return newReq.getReq();
    }
    function getReq() public view returns(Requests[] memory)
    {
      return createdReq;
    }
}
