pragma solidity 0.6.8;
contract Requests
{
    struct ReqDetails
    {
        string description;
        string quantity;
    }
    address public sender;
    address public reciever;
    ReqDetails[] public Req;

    function Reqnew(string memory des,string memory q,address bb,address rec) public
    {
        ReqDetails memory r = ReqDetails({
            description: des,
            quantity: q
        });

        Req.push(r);
        sender = bb;
        reciever = rec;
    }

    function getReq() public view returns(string memory,string memory,address,address,address)
    {
        return(Req[0].description,Req[0].quantity,sender,reciever,address(this));
    }

}
