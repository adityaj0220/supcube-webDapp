contract Shipment
{
    address public producer;
    string file;

     struct Details{
        string des;
        uint amount;
        bool complete;
    }

    Details[] public details;

     function Ship(string memory d,uint a,address creator) public
    {
      producer = creator;

      Details memory r =  Details({
         des: d,
         amount: a,
         complete: false
     });
     details.push(r);
    }

    function setHash(string memory _file) public  {
        file = _file;
    }
    function getUser() public view returns(string memory,uint,string memory)
    {
        return (details[0].des,details[0].amount,file);
    }
}
