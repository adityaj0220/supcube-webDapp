import React from 'react';
import { Button,Table,Divider } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import user from '../../../backend/contractInstances/user';
import Provider from '../../../backend/contractInstances/provider'
import ProdRequest from '../../../components/ProdRequest'

class Request extends React.Component{
    static async getInitialProps(props) {
        const { address } = props.query;
        const stake = await user.methods.val(props.query.address).call();
        console.log(stake);
        const provider = Provider(stake);
        const r = await provider.methods.getR().call();
        console.log(r);
        const requests = await Promise.all(r.map(async address => {
          let h = await provider.methods.getrequests(address).call();
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
            <Link route={`/Requests/Create/purchCreate`}>
            <a>
                <Button primary floated='right' style ={{marginBottom: 10}}>New Request</Button>
            </a>
            </Link>
            <Link route={`/purchaser/${this.props.address}/Requests/SentRequests`}>
            <a>
                <Button primary floated='right' style ={{marginBottom: 10}}>Sent Requests</Button>
            </a>
            </Link>
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
