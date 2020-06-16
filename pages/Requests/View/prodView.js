import React from 'react';
import { Button,Table,Divider } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import user from '../../../backend/contractInstances/user';
import Producer from '../../../backend/contractInstances/producer'
import ProdRequest from '../../../components/ProdRequest'
import { Link } from '../../../routes';

class Request extends React.Component{
    static async getInitialProps(props) {
        const { address } = props.query;
        const stake = await user.methods.val(props.query.address).call();
        console.log(stake);
        const producer = Producer(stake);
        const r = await producer.methods.getR().call();
        console.log(r);
        const requests = await Promise.all(r.map(async address => {
          let h = await producer.methods.getrequests(address).call();
          return h;
        }));
        console.log(requests);
        return {address,requests};
    }

    renderRow() {
          return this.props.requests.map((request, index) => {
              return(
              <ProdRequest
              key={index}
              Serial={index}
              request={request}
              />
              );
          });
      }

    render() {
        const{Header, Row, HeaderCell, Body } = Table;
        return(
            <Layout>
            <h2></h2>
                <h3 style={{color:'white'}}>Recieved Requests</h3>

                <Divider width={5}/>
                <Table>
                    <Header>
                        <Row>
                           <HeaderCell>Serial No.</HeaderCell>
                           <HeaderCell>Description</HeaderCell>
                           <HeaderCell>Quantity</HeaderCell>
                           <HeaderCell>Sender</HeaderCell>
                           <HeaderCell>Action</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                      {this.renderRow()}
                    </Body>
                </Table>
            </Layout>

        );
    }
}

export default Request;
