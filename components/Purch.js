import React from 'react';
import { Table,Button, ButtonContent, Icon} from 'semantic-ui-react';
import web3 from '../backend/web3';
import user from '../backend/contractInstances/user';
import { Link } from '../routes';
import Producer from '../backend/contractInstances/producer';

class RequestRow extends React.Component {

    render(){
         const{ Row,Cell } = Table;
         const{Serial,request} = this.props
        return(
            <Row>
               <Cell>{Serial+1}</Cell>
               <Cell>{request[0]}</Cell>
               <Cell>{request[1]}</Cell>
               <Cell>{request[3]}</Cell>
               
            </Row>
        );
    }
}
export default RequestRow;
