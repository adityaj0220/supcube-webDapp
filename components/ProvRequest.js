import React from 'react';
import { Table,Button, Icon } from 'semantic-ui-react';
import web3 from '../backend/web3';
import user from '../backend/contractInstances/user';
import Purchaser from '../backend/contractInstances/purchaser';

class RequestRow extends React.Component {

    onSend = async () => {
        const stake = await user.methods.val(this.props.request[2]).call();
        console.log(stake);
        const purchaser = Purchaser(stake);
        const accounts = await web3.eth.getAccounts();
        await purchaser.methods.addReq(this.props.request[4],this.props.request[2])
        .send({from: accounts[0]});
    };
    render(){
         const{ Row,Cell } = Table;
         const{Serial,request} = this.props
        return(
            <Row>
               <Cell>{Serial+1}</Cell>
               <Cell>{request[0]}</Cell>
               <Cell>{request[1]}</Cell>
               <Cell>{request[2]}</Cell>
               <Cell>
                   
                   <Button animated
                   basic onClick={this.onSend}
                       primary
                       color='green'>
                           <Button.Content visible>
                               Send

                           </Button.Content>
                           <Button.Content hidden>
                               <Icon name="arrow right"/>
                           </Button.Content>
                       </Button>
               </Cell>
            </Row>
        );
    }
}
export default RequestRow;
